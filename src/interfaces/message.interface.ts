/**
 * The definition for a message to be sent. It supports providing a single body that can be either plaintext or HTML,
 * or providing separate plaintext and HTML bodies.
 *
 * @member plainBody - If provided, will be sent to Postal as the plain text body. If it is undefined,
 * then `body` will be used as the plain text body if `isHtml` is `false`.
 *
 * @member htmlBody - If provided, will be sent to Postal as the HTML body. If it is undefined,
 * then `body` will be used as the HTML text body if `isHtml` is `true`.
 */
export interface MessageInfo {
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  from: string;
  sender?: string;
  replyTo?: string;
  subject: string;
  body: string; // Contains either plain or HTML body
  isHtml?: boolean; // This flag would indicate whether body is HTML
  plainBody?: string; // Allows for HTML body to be provided simultaneously with the plain body
  htmlBody?: string; // Allows for HTML body to be provided simultaneously with the plain body
}
