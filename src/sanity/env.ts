// Defines the API version for Sanity, defaulting to '2025-06-04' if not set via environment variables.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-04'

// Asserts and exports the Sanity dataset name from environment variables.
// Throws an error if NEXT_PUBLIC_SANITY_DATASET is not defined.
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

// Asserts and exports the Sanity project ID from environment variables.
// Throws an error if NEXT_PUBLIC_SANITY_PROJECT_ID is not defined.
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

// Exports the Sanity write token from environment variables, used for authenticated operations.
export const token = process.env.SANITY_WRITE_TOKEN;

/**
 * Asserts that a value is not undefined. If it is, an error is thrown with the provided message.
 * This utility function ensures that critical environment variables are present.
 * @template T The type of the value to assert.
 * @param v The value to check.
 * @param errorMessage The error message to throw if the value is undefined.
 * @returns The asserted value of type T.
 */
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
