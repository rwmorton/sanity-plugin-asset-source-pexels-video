import type {SanityClient} from '@sanity/client'
import sanityClient from 'part:@sanity/base/client'

const SANITY_PROJECT_ID = 'duystonm'
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2021-06-07'
const SANITY_API_TOKEN = 'skFwo3JMRDWZ5Iemi3Yzv72ErJMtdB2fFQZHtnoKdJdUOmDLPVdo06HkEtwPh8cYU8UDbUCQgCKyC7NgpDnxTH5mavHpKM1QExRCU4ol6KYoZUfOAQSmoueWEjhaqfzPc2nWebK3jIUHuIA6ZxRgdiUdRvTSboTcdKcttI5qH9Ss4RjIzWHw'

export const client: SanityClient =
    typeof sanityClient.withConfig === 'function'
        ? sanityClient.withConfig({apiVersion: SANITY_API_VERSION})
        : sanityClient

// export const client = ({
//     projectId: SANITY_PROJECT_ID,
//     dataset: SANITY_DATASET,
//     apiVersion: SANITY_API_VERSION,
//     token: SANITY_API_TOKEN
// })
