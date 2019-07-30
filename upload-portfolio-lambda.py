import json
import boto3
from io import BytesIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:137624610863:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.thomashatting.co')
        build_bucket = s3.Bucket('portfoliobuild.thomashatting.co')

        portfolio_zip = BytesIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print("Job Done")
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully.")
    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="The portfolio was not deployed successfully")
        raise

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
