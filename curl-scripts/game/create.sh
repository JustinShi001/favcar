# TOKEN= ... VARIABLE=VALUE sh curl-scripts/auth/create.sh

# don't use a password you use for any real websites!
curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    data: formData

  }'
# put json value into the data object we are creating, using "'"${}"'"
echo
