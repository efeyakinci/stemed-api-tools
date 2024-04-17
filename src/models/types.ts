import { z } from 'zod'

const datetime = z.string().datetime({offset: true})

export { datetime }