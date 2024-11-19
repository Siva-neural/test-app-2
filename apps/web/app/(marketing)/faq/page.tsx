import Link from 'next/link';

import { ArrowRight, ChevronDown } from 'lucide-react';

import { Button } from '@kit/ui/button';
import { Trans } from '@kit/ui/trans';

import { SitePageHeader } from '~/(marketing)/_components/site-page-header';
import { createI18nServerInstance } from '~/lib/i18n/i18n.server';
import { withI18n } from '~/lib/i18n/with-i18n';

export const generateMetadata = async () => {
  const { t } = await createI18nServerInstance();

  return {
    title: t('marketing:faq'),
  };
};

async function FAQPage() {
  const { t } = await createI18nServerInstance();

  // replace this content with translations
  const faqItems = [
    {
      // or: t('marketing:faq.question1')
      question: `What is NeuroVerify?`,
      // or: t('marketing:faq.answer1')
      answer: `NeuroVerify is an all-in-one tool that detects both liveness and deepfakes using a single-frame image, ensuring the authenticity of an individual's identity.`,
    },
    {
      question: `How does NeuroVerify detect deepfakes?`,
      answer: `NeuroVerify analyzes pixel-level anomalies, lighting inconsistencies, and unnatural facial features to identify signs of manipulation in an image.`,
    },
    {
      question: `Can NeuroVerify be integrated into our existing systems?`,
      answer: `Yes, NeuroVerify is available as api,allowing seamless integration with your current infrastructure with modifying existing codebase.`,
    },
    {
      question: `Can NeuroVerify be deployed On-Premise Server for privacy?`,
      answer: `Yes, NeuroVerify is available as an on-premise Docker image, allowing seamless integration with your current infrastructure`,
    },
    {
      question: `How many images does NeuroVerify need for analysis?`,
      answer: `NeuroVerify requires only one image to simultaneously assess both liveness and deepfake authenticity, making it efficient and user-friendly.`,
    },
    {
      question: `What platforms does NeuroDetect support for integration?`,
      answer: `NeuroDetect seamlessly integrates with leading video conferencing platforms, including Zoom, Microsoft Teams, Google Meet, and Webex. It is designed to work in the background of these platforms, providing continuous real-time protection without disrupting the user experience.`,
    },
    {
      question: `How does NeuroDetect differentiate between genuine participants and deepfakes?`,
      answer: `NeuroDetect uses a multilayer detection system that analyzes video and audio feeds in real-time. It evaluates pixel-level inconsistencies, unnatural facial features, and synthetic audio cues, as well as liveness indicators such as movement and expression. This comprehensive approach ensures that only genuine participants are identified, while deepfake attempts are detected and flagged.`
    },
    {
      question: `Is NeuroDetect suitable for large enterprises with high security requirements?`,
      answer: `Yes, NeuroDetect is designed to meet the needs of large enterprises. It offers an Enterprise package that includes advanced security features, such as a comprehensive Security Dashboard, 24/7 dedicated support, and customized integration options. This package is ideal for organizations that require the highest level of security for their video conferencing activities.`,
    },
    {
      question: `What happens if NeuroDetect detects a potential threat during a video conference?`,
      answer: `When NeuroDetect identifies a potential threat, such as a deepfake video or audio, it instantly alerts both the participants and the security teams. This allows for immediate action, such as pausing the meeting for further investigation or removing the suspicious participant. The system also generates detailed reports for deeper analysis and future reference.`,
    },
    {
      question: `How easy is it to implement NeuroDetect into our existing infrastructure?`,
      answer: `NeuroDetect is designed for seamless integration with minimal disruption to your existing infrastructure. It can be deployed as an on-premise Docker container or integrated via APIs with your current video conferencing tools. The process is straightforward, and our support team is available to assist with the setup to ensure a smooth and efficient deployment.`,
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => {
      return {
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      };
    }),
  };

  return (
    <>
      <script
        key={'ld:json'}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className={'flex flex-col space-y-4 xl:space-y-8'}>
        <SitePageHeader
          title={t('marketing:faq')}
          subtitle={t('marketing:faqSubtitle')}
        />

        <div className={'container flex flex-col space-y-8 pb-16'}>
          <div className="flex w-full max-w-xl flex-col">
            {faqItems.map((item, index) => {
              return <FaqItem key={index} item={item} />;
            })}
          </div>

          <div>
            <Button asChild variant={'outline'}>
              <Link href={'/contact'}>
                <span>
                  <Trans i18nKey={'marketing:contactFaq'} />
                </span>

                <ArrowRight className={'ml-2 w-4'} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withI18n(FAQPage);

function FaqItem({
  item,
}: React.PropsWithChildren<{
  item: {
    question: string;
    answer: string;
  };
}>) {
  return (
    <details className={'group border-b px-2 py-4 last:border-b-transparent'}>
      <summary
        className={
          'flex items-center justify-between hover:cursor-pointer hover:underline'
        }
      >
        <h2
          className={
            'hover:underline-none cursor-pointer font-sans font-medium'
          }
        >
          <Trans i18nKey={item.question} defaults={item.question} />
        </h2>

        <div>
          <ChevronDown
            className={'h-5 transition duration-300 group-open:-rotate-180'}
          />
        </div>
      </summary>

      <div className={'flex flex-col space-y-2 py-1 text-muted-foreground'}>
        <Trans i18nKey={item.answer} defaults={item.answer} />
      </div>
    </details>
  );
}
