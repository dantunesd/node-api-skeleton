# Node API Skeleton

Your project description goes here.

---

# Prerequisites

- `Nodejs 14.16`

- `Other prerequisite`

- `Another pre-requisite`

---

# Installation

Install dependencies

```bash
npm install
```

Create a `.env` file:

```bash
cp .env.example .env
```

Note: run this steps before running all the steps bellow.

---

# Tests

Run unit tests:

```bash
npm test
```

Run integration tests:

```bash
npm run test:integration
```

---

# Start API locally

Run the following command:

```bash
npm start
```

---

# Rest API

Available resources:

## Create

### Request

`POST /your-resource`

```bash
curl --request POST 'http://localhost:8080/your-resource/' \
--data-raw '{
  "field": "value",
}'
```

### Response

```json
Status: 201 Created
```

## Get all

### Request

`GET /your-resource`

```bash
curl --request GET 'http://localhost:8080/your-resource/'
```

### Response

```json
Status: 200 OK

[
  {
    "field": "value"
  }
]
```
