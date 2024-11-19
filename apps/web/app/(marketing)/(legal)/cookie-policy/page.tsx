import { SitePageHeader } from '~/(marketing)/_components/site-page-header';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

export async function generateMetadata() {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:cookiePolicy'),
  };
}

async function CookiePolicyPage() {
  const { t } = await createI18nServerInstance();

  return (
    <div>
      <SitePageHeader
        title={t('marketing:cookiePolicy')}
        subtitle={t('marketing:cookiePolicyDescription')}
      />

      <div className="container mx-auto py-8">
        <div className="prose dark:prose-invert max-w-none">
          <p><strong>Last Updated:</strong> October 2024</p><br />
          <br />
          <h2 className="underline decoration-2 decoration-black-500">
            1. Introduction
          </h2>
          <p>
            This Cookie Policy explains how Neural Defend (“we,” “us,” or “our”) uses cookies and similar technologies when you visit{' '}
            <a
              href="https://www.neuraldefend.com"
              className="underline decoration-2 decoration-blue-500 hover:decoration-blue-700"
            >
              www.neuraldefend.com
            </a> (the “Site”). By using the Site, you agree to our use of cookies as described in this policy.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">
            2. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device that help us enhance your browsing experience. They allow us to recognize your device and remember information about your visit, such as your preferences or login details.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">
            3. Types of Cookies We Use
          </h2>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Necessary for the Site to function correctly (e.g., login authentication).
            </li>
            <li>
              <strong>Performance Cookies:</strong> Collect information about how visitors use the Site, helping us improve functionality.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences, such as language selection or display settings.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us analyze usage trends and user behavior through third-party tools like Google Analytics.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used to deliver relevant advertisements based on your browsing behavior.
            </li>
          </ul>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">
            4. How to Manage Cookies
          </h2>
          <p>
            You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may impact your experience on the Site.
          </p>
          <p>
            Below are links to manage cookie settings for popular browsers:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 decoration-black-500 hover:decoration-black-700"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 decoration-black-500 hover:decoration-black-700"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 decoration-black-500 hover:decoration-black-700"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 decoration-black-500 hover:decoration-black-700"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">
            5. Third-Party Cookies
          </h2>
          <p>
            We may allow third-party service providers to place cookies on your device for analytics, advertising, or social media purposes. These providers have their own privacy and cookie policies, and we recommend reviewing them.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">
            6. Changes to This Cookie Policy
          </h2>
          <p>
            We may update this policy from time to time. Significant changes will be communicated through the Site or via email. Please review this policy periodically to stay informed.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Cookie Policy, please contact us:
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

export default withI18n(CookiePolicyPage);
