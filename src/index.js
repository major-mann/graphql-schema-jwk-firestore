module.exports = createFirestoreJwkSchema;

const createFirestoreDatasource = require('@major-mann/datasource-firestore');
const createJwkSchema = require('@major-mann/graphql-schema-jwk');

async function createFirestoreJwkSchema({ firestore, name }) {
    const loadCollection = await createFirestoreDatasource({ firestore });
    const composer = await createJwkSchema({
        name,
        data: loadCollection
    });
    return composer;
}
