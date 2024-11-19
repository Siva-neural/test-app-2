import { SitePageHeader } from '~/(marketing)/_components/site-page-header';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

export async function generateMetadata() {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:privacyPolicy'),
  };
}

async function PrivacyPolicyPage() {
  const { t } = await createI18nServerInstance();

  return (
    <div>
    <SitePageHeader
      title={t('marketing:privacyPolicy')}
      subtitle={t('marketing:privacyPolicyDescription')}
    />

    <div className="container mx-auto py-8">
      <div className="prose dark:prose-invert max-w-none">
        <p><strong>Last Updated:</strong> October 2024</p><br />

        <p>
          At Neural Defend, accessible from{' '}
          <a
            href="https://www.neuraldefend.com"
            className="underline decoration-2 decoration-blue-500 hover:decoration-blue-700"
          >
            www.neuraldefend.com
          </a>, your privacy is one of our primary concerns. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit or interact with our Site.
        </p>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          1. Information We Collect
        </h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, and any other data you provide when creating an account or contacting us.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, operating system, and other data related to your device and browsing behavior.
          </li>
          <li>
            <strong>Cookies:</strong> Information about your preferences to enhance your experience on our Site.
          </li>
        </ul>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          2. How We Use Your Information
        </h2>
        <p>We use the collected data for the following purposes:</p>
        <ul>
          <li>To provide, maintain, and improve our services.</li>
          <li>To communicate with you regarding updates, offers, or technical notices.</li>
          <li>To analyze trends and improve the user experience.</li>
          <li>To prevent fraud, ensure security, and enforce our Terms of Service.</li>
        </ul>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          3. How We Share Your Information
        </h2>
        <p>We do not sell your personal data. However, we may share it under the following circumstances:</p> 
        <ul>
          <li>With trusted service providers who assist in delivering our services.</li>
          <li>In response to legal obligations or to protect our rights.</li>
          <li>In case of a business transfer (e.g., merger, sale of assets).</li>
        </ul>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          4. Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies to enhance your experience. By continuing to use the Site, you consent to our use of cookies. You can disable cookies through your browser settings, but some features may not function properly without them.
        </p>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          5. Data Security
        </h2>
        <p>
          We implement appropriate technical and organizational measures to safeguard your personal data. However, no system is completely secure, and we cannot guarantee absolute security.
        </p>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          6. Your Data Rights
        </h2>
        <p>You have the following rights regarding your data:</p>
        <ul>
          <li>Access and update your personal information.</li>
          <li>Request deletion of your data (subject to certain conditions).</li>
          <li>Withdraw your consent for marketing communications.</li>
          <li>File a complaint with relevant data protection authorities.</li>
        </ul>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          7. Third-Party Links
        </h2>
        <p>
          Our Site may contain links to third-party websites. We are not responsible for their privacy practices, so we recommend reviewing their policies before interacting with those sites.
        </p>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          8. Children's Privacy
        </h2>
        <p>
          We do not knowingly collect personal information from children under the age of 13. If we discover such data, we will promptly delete it.
        </p>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this policy occasionally to reflect changes in our practices or legal obligations. We encourage you to review this page periodically. Significant changes will be communicated through the Site.
        </p>
        <br />
        <h2 className="underline decoration-2 decoration-black-500">
          10. Contact Us
        </h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us:
        </p>
        <p>
          Neural Defend <br />
          Email:{' '}
          <a
            href="mailto:support@neuraldefend.com"
            className="underline decoration-2 decoration-black-500 hover:decoration-black-700"
          >
            support@neuraldefend.com
          </a>
          <br />
          
        </p>
      </div>
    </div>
  </div>
  );
}

export default withI18n(PrivacyPolicyPage);
