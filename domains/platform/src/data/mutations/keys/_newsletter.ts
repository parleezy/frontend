export const newsletterKeys = {
    all: ['newsletter'] as const,
    signup: () => [newsletterKeys.all, 'signup'],
} as const
