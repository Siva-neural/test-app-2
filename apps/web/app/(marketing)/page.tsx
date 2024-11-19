
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon, LayoutDashboard } from 'lucide-react';
import {
  CtaButton,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  FeatureShowcaseIconContainer,
  GradientSecondaryText,
  Hero,
  Pill,
  SecondaryHero,
} from '@kit/ui/marketing';

// import billingConfig from '~/config/billing.config';
// import pathsConfig from '~/config/paths.config';
import { withI18n } from '~/lib/i18n/with-i18n';


const CLIENTS = [
  { name: 'Diro', logo: '/images/diro.png', url: 'https://diro.io/' },
  { name: 'Finchat', logo: '/images/finchat.png', url: 'https://finchat.tech/' },
  
];

const INVESTORS = [
  { name: 'SBXI', logo: '/images/mitsbxi.png', url: 'https://www.sbxi.com/' },
  { name: 'IPV', logo: '/images/ipv.png', url: 'https://ipventures.in/' },
  
];

function Home() {
  return (
    <div className={'mt-4 flex flex-col space-y-24 py-14'}>
      <Hero
        // pill={
        //   <Pill label={'New'}>
        //     <span>The leading SaaS Starter Kit for ambitious developers</span>
        //   </Pill>
        // }
        title={
          <>
            <span>Combating Financial Fraud with Neural Defend's</span>
            <span>Real-Time Deepfake Defense System</span>
          </>
        }
        subtitle={
          <span>
            Real-time deepfake detection using AI can protect financial systems 
            from fraud by instantly indentifying and blocking synthetic content
          </span>
        }
        cta={<MainCallToActionButton />}
      />
      <div className="relative mt-8 rounded-3xl shadow-md flex items-center max-w-[72rem] mx-auto overflow-hidden dark:border-gray-600 lg:h-[29rem] bg-white dark:bg-gray-800">
        <Image
          priority
          className="rounded-3xl w-full h-full object-cover"
          width={1794}
          height={1120}
          src={`/images/homepage.svg`}
          alt={`App Image`}
        />
      </div>

      <div className={'container mx-auto'}>
        <div
          className={'flex flex-col space-y-16 xl:space-y-32 2xl:space-y-36'}
        >
          <FeatureShowcase
            heading={
              <>
                <b className="font-semibold dark:text-white">
                  Unmasking Reality:
                </b>
                {' '}
                <GradientSecondaryText>
                  Dive into the World of Deepfake Detection with Multi layer Security
                </GradientSecondaryText>
              </>
            }
            icon={
              <FeatureShowcaseIconContainer>
                <LayoutDashboard className="h-5" />
                <span>IN NEURAL DEFEND</span>
              </FeatureShowcaseIconContainer>
            }
          >
            <FeatureGrid>
              <FeatureCard
                className={'relative col-span-2 overflow-hidden lg:col-span-1 lg:h-96 hidden lg:block'}
                label={''}
                description={''}
              >
                <Image
                  className="absolute right-0 top-0 h-full w-full rounded-tl-2xl border lg:h-auto"
                  src={'/images/tab.jpeg'}
                  width={2061}
                  height={800}
                  alt={'Multi Tenancy'}
                />
              </FeatureCard>

              <FeatureCard
              className={"relative col-span-2 flex flex-wrap items-center p-4 lg:p-6 gap-4 overflow-hidden lg:h-96"}
              label={'Real-Time Deepfake Detection for Fraud Prevention'}>
              <div className="w-full">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Leveraging advanced multimodal algorithms, Neural Defend offers real-time detection of deepfakes 
                  across videos and audios, providing instantaneous protection against digital manipulation. 
                  The platform's proprietary SaaS technology integrates liveness detection and real-time video analysis, 
                  ensuring the authenticity of digital identities. Targeting high-risk sectors, including mid-cap finance, 
                  security companies, and Fortune 500s, Neural Defend has developed a comprehensive defense solution. 
                  Neural Defend is at the forefront of combating financial fraud, a threat expected to escalate to 
                  $10.5 trillion in global losses by 2025 due to deepfake and AI-driven crimes.
                </p>
              </div>
            </FeatureCard>


            </FeatureGrid>
          </FeatureShowcase>
        </div>
      </div>

      <div className={'container mx-auto'}>
          {/* Global Clients Section */}
            <section id="clients" className="py-16">
              <SecondaryHero
                heading="Global companies are working with us"
              />

              <div className="mt-12 flex flex-wrap justify-center gap-12">
                {CLIENTS.map((client, index) => (
                  <div
                    key={index}
                    className="p-4 bg-transparent rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link href={client.url} target="_blank" rel="noopener noreferrer">
                      <div className="w-40 h-40 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          width={150} // Increased width to 144
                          height={150} // Increased height to 144
                          className="object-contain grayscale hover:grayscale-0 transition duration-300"
                          style={{ backgroundColor: 'transparent' }}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              
            </section>
            {/* Testimonial Card */}
            <div className="relative mt-8 rounded-3xl shadow-md flex flex-col-reverse lg:flex-row items-center max-w-[60rem] mx-auto overflow-hidden border border-gray-300 dark:border-gray-600 lg:h-96">
              <div className="flex-1 p-8 text-center lg:text-left"> 
                <a href="https://diro.io/">
                  <h3 className="text-2xl font-bold mb-4 text-center">Diro</h3>
                </a>
                <h4 className="text-base leading-relaxed">
                As the CEO of Diro, I’d like to commend Neural Defend for their exceptional work. Your innovative solutions, particularly NeuroVerify, have set a new standard in the industry. The ability to detect deepfakes and liveness with such precision through a single image is a game-changer. Your dedication to enhancing security for e-KYC companies is truly impressive, and it's clear that your proprietary algorithms are among the best in the field. We appreciate your commitment to quality, security, and reliability, and look forward to continued collaboration and success. Keep up the fantastic work!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mt-2 font-semibold">Vishal Gupta</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">Co-founder, Diro</p>
              </div>
              <div className="flex-none w-full lg:w-1/3">
                <Image
                  src="/images/vishal.jpg"
                  alt="Vishal Gupta"
                  width={135}
                  height={100}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>



          {/* Global Investors Section */}
          <section id="investors" className="py-16">
            <SecondaryHero
              heading="Backed by funds across India and US"
            />

            <div className="mt-12 flex flex-wrap justify-center gap-12">
              {INVESTORS.map((client, index) => (
                <div
                  key={index}
                  className="p-4 bg-transparent rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={client.url} target="_blank" rel="noopener noreferrer">
                    <div className="w-40 h-40 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={150}
                        height={150}
                        className="object-contain grayscale hover:grayscale-0 transition duration-300"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        <div
          className={
            'flex flex-col items-center justify-center space-y-16 py-16'
          }
        >
          <SecondaryHero
            pill={<Pill>OUR SERVICE</Pill>}
            heading="Experience our"
            subheading="Innovative Products."
          />
          {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* Service Block 1 */}
              <div className="p-8 border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="text-5xl text-blue-500 mb-4">
                    <i className="fas fa-bullhorn"></i> {/* Use an icon library here */}
                  </div>
                  <h5 className="text-xl font-bold mb-2">
                    <a href="#">NeuroVerify</a>
                  </h5>
                  <p className="text-center text-white-600">
                  Designed to support onboarding processes for eKYC companies, this feature ensures the authenticity of digital identities, protecting businesses from fraudulent activities during the verification process.
                  </p>
                </div>
              </div>

              {/* Service Block 2 */}
              <div className="p-8 border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="text-5xl text-blue-500 mb-4">
                    <i className="fas fa-shield-alt"></i> {/* Use an icon library here */}
                  </div>
                  <h5 className="text-xl font-bold mb-2">
                    <a href="#">NeuroDetect</a>
                  </h5>
                  <p className="text-center text-white-600">
                  This offering safeguards corporate communications against AI-driven deepfake attacks, ensuring the integrity and security of sensitive information.
                  </p>
                </div>
              </div>

              {/* Service Block 3 */}
              <div className="p-8 border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                <div className="flex flex-col items-center">
                  <div className="text-5xl text-blue-500 mb-4">
                    <i className="fas fa-fingerprint"></i> {/* Use an icon library here */}
                  </div>
                  <h5 className="text-xl font-bold mb-2">
                    <a href="#">Know more about our Product</a>
                  </h5>
                  <p className="text-center text-white-600">
                    A real-time deepfake detection solution that combats financial fraud caused by AI deepfakes.
                  </p>
                  <div className="mt-4">
                    <a href="/product" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group">
                    Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          
          
        </div>
        
      </div>
  );
}

export default withI18n(Home);

function MainCallToActionButton() {
  return (
    <div className={'flex space-x-4'}>
      <CtaButton>
        <Link href={'https://calendly.com/neural_defend'}>
          <span className={'flex items-center space-x-0.5'}>
            Book a demo
            <ArrowRightIcon
              className={
                'h-4 animate-in fade-in slide-in-from-left-8' +
                ' delay-1000 duration-1000 zoom-in fill-mode-both'
              }
            />
          </span>
        </Link>
      </CtaButton>

      <CtaButton variant={'link'}>
        <Link href={'/contact'}>
          <span>Contact Us</span>
        </Link>
      </CtaButton>
    </div>
  );
}
