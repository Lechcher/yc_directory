import DOMPurify from 'dompurify';

const sanitizedHtml = (html: string) => DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed'],
    ADD_TAGS: ["br"],
});

export default sanitizedHtml;