#!/bin/bash
aws s3 cp s3://www.standwithkashmir.org.au/facts/ ./archive --recursive
# Empty the S3 bucket
aws s3 rm s3://www.standwithkashmir.org.au/facts/ --recursive

# Upload our project files to the S3 bucket
aws s3 cp dist/ s3://www.standwithkashmir.org.au/facts/ --recursive

aws cloudfront create-invalidation --distribution-id E2E8RFVSJXH6JE --paths "/*"
