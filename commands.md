
gsutil cp input.html gs://storage-myownvoiceisenough/
gsutil acl ch -u AllUsers:R gs://storage-myownvoiceisenough/input.html

gcloud beta functions list
gcloud beta functions deploy postMovie --verbosity debug
gcloud beta functions describe postMovie
curl "https://us-central1-myownvoiceisenough.cloudfunctions.net/postMovie?message=hogehoge"
