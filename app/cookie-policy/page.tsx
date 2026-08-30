import { LegalPage, LegalSection } from "@/components/legal-page"
import { CookieSettingsButton } from "@/components/cookie-consent-banner"
import { LEGAL_VERSIONS } from "@/lib/one-stop-shop/constants"

export default function CookiePolicyPage() { return <LegalPage label="Legal" title="Cookie Policy" version={LEGAL_VERSIONS.cookies}>
  <LegalSection title="1. What cookies are"><p>Cookies and similar browser storage technologies can remember information about a visit. Dutch rules require prior consent for non-essential tracking technologies. Necessary technologies may be used where they are required to provide or secure a service you request.</p></LegalSection>
  <LegalSection title="2. Categories"><p><strong>Necessary — always active.</strong> These remember your cookie choice, maintain security and authentication, protect booking submissions and operate requested site features.</p><p><strong>Analytics — off by default.</strong> These may help us understand aggregate website usage. No analytics technology is activated until you opt in.</p><p><strong>Marketing — off by default.</strong> These may measure or personalise advertising. We do not use booking data for marketing in v1, and no marketing technology is activated until you opt in.</p></LegalSection>
  <LegalSection title="3. Your choice"><p>Rejecting optional cookies is as easy as accepting them. You can change or withdraw your choice at any time; withdrawal does not affect processing that occurred before it.</p><CookieSettingsButton /></LegalSection>
  <LegalSection title="4. Storage period"><p>Your consent preference is stored for up to six months, after which the site may ask again. Individual services, if enabled after consent, may use shorter periods disclosed in an updated version of this policy.</p></LegalSection>
  <LegalSection title="5. Contact"><p>Questions can be sent to <a className="underline" href="mailto:office@studiobycristian.com">office@studiobycristian.com</a>.</p></LegalSection>
  </LegalPage> }
