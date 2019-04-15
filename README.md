# cpfagora

## Install and Run
.env: file with the settings (required)
```
ENV = 
PORT = 

MONGO_USER = 
MONGO_PASS = 
MONGO_URI = 

CPFCNPJ_API = 
RECEITAWS_API = 
```

### Clone repo and enter in it
```bash
git clone https://github.com/wellingtonsilverio/cpfagora.git
cd cpfagora
```

### Install NodeJS
get in https://nodejs.org, choice you platform, download this and install in admin mode

### Install NodeJS modules needed run project
```bash
npm i
```

### Run 
```bash
npm start
```

## Documentation
### Get Cadastral Synthesis by CPF
returns the entered CPF data, only CPFs previously consulted in the database
```
GET /search/{CPF}
```
#### Responses
```
{
    "status":true,
    "data": {
        "_id":"5c9e22ef2880322f56a8e41b",
        "status":1, // Active/Regular
        "cpf": 00000000000,
        "nome":"José da Silva",
        "nascimento":"1990-12-31T03:00:00.000Z",
        "createdAt":"2019-03-29T13:51:43.865Z",
        "updatedAt":"2019-03-29T13:51:43.865Z"
    }
}
```
### Get Cadastral Synthesis by CPF with Premium Plan
returns the data of the CPF informed, if we do not have data about it, at the time
```
GET /search/{SECRET_KEY}/{CPF}
```
#### Responses
```
{
    "status":true,
    "data": {
        "_id":"5c9e22ef2880322f56a8e41b",
        "status":1, // Active/Regular
        "cpf": 00000000000,
        "nome":"José da Silva",
        "nascimento":"1990-12-31T03:00:00.000Z",
        "createdAt":"2019-03-29T13:51:43.865Z",
        "updatedAt":"2019-03-29T13:51:43.865Z"
    },
    "credit": 100
}
```

