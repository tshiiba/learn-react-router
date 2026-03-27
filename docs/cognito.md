### User Pool を作成

```bash
aws \
  --endpoint-url http://localhost:9229 \
  cognito-idp create-user-pool \
  --pool-name local-user-pool
```

### App Client を作成

```bash
aws \
  --endpoint-url http://localhost:9229 \
  cognito-idp create-user-pool-client \
  --user-pool-id <USER_POOL_ID> \
  --client-name local-web-client \
  --explicit-auth-flows ALLOW_USER_PASSWORD_AUTH ALLOW_REFRESH_TOKEN_AUTH
```

### test user を作成

```bash
aws \
  --endpoint-url http://localhost:9229 \
  cognito-idp admin-create-user \
  --user-pool-id <USER_POOL_ID> \
  --username test-user@example.com \
  --user-attributes Name=email,Value=test-user@example.com Name=email_verified,Value=true \
  --message-action SUPPRESS
```

### permanent password を設定

```bash
aws \
  --endpoint-url http://localhost:9229 \
  cognito-idp admin-set-user-password \
  --user-pool-id <USER_POOL_ID> \
  --username test-user@example.com \
  --password TestPass123! \
  --permanent
```

### 作成確認

```bash
aws \
  --endpoint-url http://localhost:9229 \
  cognito-idp list-user-pools \
  --max-results 10

aws \
  --endpoint-url http://localhost:9229 \
  cognito-idp list-user-pool-clients \
  --user-pool-id <USER_POOL_ID> \
  --max-results 10
```

#### このリポジトリでは現在の既定値として以下を使っています。

- User Pool ID: `local_74HoRiqT`
- App Client ID: `dwbl59u606wuwjnq1m6mh686v`
- Test user: `test-user@example.com`
- Password: `TestPass123!`

### CLI で access token を取得できることを確認

```bash
aws \
  --endpoint-url http://localhost:9229 \
  cognito-idp initiate-auth \
  --client-id <APP_CLIENT_ID> \
  --auth-flow USER_PASSWORD_AUTH \
  --auth-parameters USERNAME=test-user@example.com,PASSWORD=TestPass123!
```
