# Learning Hub Sanity Studio

## Setup

- Setup sanity cli and login

- Setup Node version
```
nvm install && nvm use
```

- Install dependencies
```
yarn install
```

- Start studio in local
```
yarn dev
```

## Scripts

## Remove field

Removes a field of all documents with the specified type. 

```
sanity exec scripts/remove-field.ts --with-user-token -- --type=<Document Type> --field=<Fieldname>
```

**Example**

The below command removes the field *isHome* of all documents with type *tag*

```
sanity exec scripts/remove-field.ts --with-user-token -- --type=tag --field=isHome
```
## Rename field

Renames a field of all documents with the specified type. 

```
sanity exec scripts/rename-field.ts --with-user-token  -- --type=<Document Type> --oldField=<Old field name> --newField=<New field name>
```

**Example**

The below command renames the field *isHomeTag* to *isHome* of all documents with type *tag*

```
sanity exec scripts/rename-field.ts --with-user-token  -- --type=tag --oldField=isHomeTag --newField=isHome
```