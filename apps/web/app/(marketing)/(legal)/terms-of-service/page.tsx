import { PageBody } from '@kit/ui/page';

import { SitePageHeader } from '~/(marketing)/_components/site-page-header';
import { createI18nServerInstance, useTranslation  } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

export async function generateMetadata() {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:termsOfService'),
  };
}

async function TermsOfServicePage() {
  const { t } = await createI18nServerInstance();

  return (
    <div>
      <SitePageHeader
        title={t('marketing:termsOfService')}
        subtitle={t('marketing:termsOfServiceDescription')}
      />

      <div className="container mx-auto py-8">
        <div className="prose dark:prose-invert max-w-none">
          <p>
            <strong>Last Updated:</strong> October 2024
          </p>
          <p><br />
            Welcome to{' '}
            <a
              href="https://www.neuraldefend.com"
              className="underline decoration-2 decoration-blue-500 hover:decoration-blue-700"
            >
              www.neuraldefend.com
            </a>{' '}
            (together with its subdomains, content, trademarks, and services, collectively the “Site”). 
            Please read these Terms of Service (“Agreement”) carefully to understand your rights and 
            obligations when accessing or using the Site. This Agreement is a legally binding contract 
            between you and Neural Defend (“Neural Defend,” “we,” “our,” or “us”).
          </p>
          <p><br />
            By accessing or using the Site, you acknowledge that you understand and agree to comply 
            with these Terms, along with our{' '}
            <a
              href="/privacy-policy"
              className="underline decoration-2 decoration-black-500 hover:decoration-black-700"
            >
              Privacy Policy
            </a>. If you do not agree, please stop using the Site.
          </p>
                  <br /><br />
          <h2 className="underline decoration-2 decoration-black-500">1. Modification of Terms</h2>
          <p>
            We may modify this Agreement at any time. Changes will be effective 10 days after posting on 
            the Site, and continued use of the Site indicates acceptance of the modifications.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">2. Eligibility</h2>
          <p>
            The Site is intended for users aged 13 years or older. If you are under 13, do not use the Site. 
            If you are between 13 and 18, a parent or guardian must review and agree to these Terms before 
            you use the Site.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">3. Our Services</h2>
          <p>
            Neural Defend provides tools and technologies for detecting deepfake content. The Site offers 
            insights, resources, and software related to our deepfake detection solutions. Access to some 
            features may require creating an account or agreeing to specific terms.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">4. License to Use the Site</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access the 
            Site for personal or internal business use. This license does not permit you to:
          </p>
          <ul>
            <li>Modify, copy, or distribute content from the Site.</li>
            <li>Reverse-engineer or attempt to discover underlying technology or algorithms.</li>
            <li>Use the Site to develop competing products or services.</li>
            <li>Engage in activities that harm the Site’s integrity or security.</li>
          </ul>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">5. Prohibited Activities</h2>
          <p>By using the Site, you agree not to:</p>
          <ul>
            <li>Upload or transmit malicious software (e.g., viruses, malware).</li>
            <li>Misuse our services to create or distribute deepfake content.</li>
            <li>Use the Site for illegal activities or to violate the rights of others.</li>
            <li>Attempt to overload or disrupt the Site’s infrastructure.</li>
          </ul>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">6. Account Management</h2>
          <p>
            You may need to create an account to access certain services. You must provide accurate 
            information and keep your credentials secure. Notify us immediately of unauthorized access 
            or security breaches. We reserve the right to suspend or terminate accounts for misuse or 
            non-compliance with these Terms. For account deletion, contact us at{' '}
            <a
              href="mailto:support@neuraldefend.com"
              className="underline decoration-2 decoration-black-500 hover:decoration-black-700"
            >
              support@neuraldefend.com
            </a>.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">7. Fees and Payments</h2>
          <p>
            Our basic services may be free, but Neural Defend reserves the right to introduce fees for 
            advanced features or future services. Users will be notified in advance, and no fees will be 
            charged without prior consent. Failure to pay may result in limited access to features or 
            account suspension.
          </p>
          <br />
          <h2 className="underline decoration-2 decoration-black-500">8. Intellectual Property Rights</h2>
          <p>
            All content on the Site, including text, software, graphics, and trademarks (collectively, 
            the “Materials”), is owned by Neural Defend or its licensors and protected under intellectual 
            property laws. You may not use or exploit the Materials without our express written consent.
          </p>
                    <br />
          <h2 className="underline decoration-2 decoration-black-500">9. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for their content, 
            policies, or practices, and accessing such links is at your own risk.
          </p>
                    <br />
          <h2 className="underline decoration-2 decoration-black-500">10. Termination and Suspension</h2>
          <p>
            We may suspend or terminate your access to the Site at any time if you violate these Terms or 
            engage in behavior harmful to the Site or other users. Upon termination, your right to access 
            the Site will cease immediately.
          </p>
                    <br />
          <h2 className="underline decoration-2 decoration-black-500">11. Disclaimers and Limitation of Liability</h2>
          <p>
            Our services are provided on an "as-is" and "as-available" basis, without warranties of any kind. 
            We do not guarantee that the Site or services will be uninterrupted or error-free.
          </p>
                    <br />
          <h2 className="underline decoration-2 decoration-black-500">12. Indemnification</h2>
          <p>You agree to indemnify and hold Neural Defend and its affiliates harmless from any claims.</p>
                    <br />
          <h2 className="underline decoration-2 decoration-black-500">17. Contact Us</h2>
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

export default withI18n(TermsOfServicePage);
