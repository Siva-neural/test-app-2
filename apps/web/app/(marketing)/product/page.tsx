import { ArrowRightIcon } from 'lucide-react';
import { CtaButton, Hero } from '@kit/ui/marketing';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  imgSrc: string;
  features: string[];
}

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center space-y-24 py-14">
      {/* Centralized Container */}
      <div className="w-full max-w-5xl px-4">
        {/* Hero Section */}
        <Hero
          title={<span>Neural Defend: Your Partner in Deepfake Defense</span>}
          subtitle={
            <span>
              Detect deepfakes with precision and speed. Use pre-built solutions trusted by industry experts for immediate protection, or customize your own detection system to meet specific needs.
            </span>
          }
        />

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Card 1 */}
          <ProductCard
            title="NeuroVerify: Deepfake Detection for Identity Verification"
            description="Neural Defend offers identity verification via APIs, SDKs, and on-premise options, integrating seamlessly with any system."
            features={["Real-time detection", "API and SDK support", "On-premise options"]}
            imgSrc={'/images/neuroverify.jpg'}
          />

          {/* Card 2 */}
          <ProductCard
            title="NeuroDetect: Safeguard Your Video Conferences"
            description="Integrates with Zoom, Teams, Webex, and more to add real-time deepfake protection to video calls."
            features={["Real-time alerts", "Seamless integration", "Video call protection"]}
            imgSrc={'/images/neurodetect.png'}
          />

          {/* Card 3 */}
          <ProductCard
            title="NeuroAudio: Detects Deepfake Voices"
            description="NeuroAudio detects deepfake voices, ensuring the integrity of voice-based authentication systems."
            features={["Voice detection", "Identity theft protection","API and SDK support", "Advanced algorithms"]}
            imgSrc={'/images/neuroaudio.png'}
          />

          {/* Card 4 */}
          <ProductCard
            title="NeuroFake: Image and Video Verification"
            description="NeuroFake accurately identifies whether an image is authentic or manipulated."
            features={["Image verification", "Video analysis", "User-friendly interface","API and SDK support"]}
            imgSrc={'/images/neurofake.png'}
          />
        </div>
      </div>
    </div>
  );
}

// ProductCard Component with TypeScript Props
const ProductCard: React.FC<ProductCardProps> = ({ title, description, features, imgSrc }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
      <Link href="#">
        <img
          className="rounded-t-lg object-cover h-48 w-full"
          src={imgSrc}
          alt={title}
        />
      </Link>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-500 transition-colors duration-300">
            {title}
          </h5>
        </Link>
        <p className="mb-4 text-gray-700 dark:text-gray-400">{description}</p>

        {/* Features List */}
        <ul className="mb-4 text-gray-600 dark:text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ArrowRightIcon className="h-4 w-4 mr-2 text-blue-500" />
              {feature}
            </li>
          ))}
        </ul>

        <MainCallToActionButton />
      </div>
    </div>
  );
};

// CTA Button Component
const MainCallToActionButton: React.FC = () => {
  return (
    <div className="mt-auto">
      <CtaButton>
      <Link href={'https://calendly.com/neural_defend'}>

          <span className="flex items-center space-x-0.5">Get Access
            
            <ArrowRightIcon
              className="h-4 animate-in fade-in slide-in-from-left-8 delay-1000 duration-1000 zoom-in fill-mode-both"
            />
          </span>
        </Link>
      </CtaButton>
    </div>
  );
};