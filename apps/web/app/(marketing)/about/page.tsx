// apps/web/app/(marketing)/about/page.tsx
import Image from 'next/image';
import {
  Hero,
  Pill,
  SecondaryHero,
} from '@kit/ui/marketing';
import Link from 'next/link';



export default function AboutPage() {
  return (
    <div className="mt-4 flex flex-col items-center space-y-24 py-14 px-6">
      <Hero
        pill={
          <Pill label="">
            <span>Our Technology</span>
          </Pill>
        }
        title={
          <>
            <span>Realtime Multimodal Deepfake</span>{' '}
            <span className="text-gray-500">detection technology</span>
          </>
        }
        subtitle={
          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl text-center">
            We have developed a cutting-edge multimodal deepfake detection algorithm that excels at identifying synthetic media across images, videos, and audio. 
            Leveraging advanced AI techniques—including computer vision, audio analysis, and deep learning—our technology detects subtle cues and anomalies in content. 
            By integrating multiple modalities, our algorithm ensures robust, accurate detection across diverse media types.
            <br /><br />
            A key feature is its real-time capability, enabling swift detection even in live feeds through optimized algorithms and efficient pipelines. 
            Our comprehensive solution addresses the growing challenges of synthetic media manipulation, delivering instant and reliable protection.
          </p>
        }
        image={
          <Image
            priority
            className="rounded-2xl border border-gray-200 dark:border-primary/10"
            width={1779} // Reduced image size by 50%
            height={1111} // Adjusted to maintain aspect ratio
            src="/images/ourrootmit.png"
            alt="App Image"
          />
        }
      />

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-16 py-16">
          <SecondaryHero
            pill={<Pill>Core Value</Pill>}
            heading="Unveiling our core values"
            subheading="for lasting impact."
          />
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Service Block 1 */}
            <div className="p-8 border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <div className="flex flex-col items-center">
                <div className="text-5xl text-blue-500 mb-4">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h5 className="text-xl font-bold mb-2">
                  <a href="#">People</a>
                </h5>
                <p className="text-center text-white-600">
                  We prioritize people’s safety, privacy, and well-being. Our deepfake detection solutions empower users to navigate the digital landscape with confidence. By preventing malicious use of synthetic media, we contribute to a more secure and trustworthy online environment.
                </p>
              </div>
            </div>

            {/* Service Block 2 */}
            <div className="p-8 border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <div className="flex flex-col items-center">
                <div className="text-5xl text-blue-500 mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h5 className="text-xl font-bold mb-2">
                  <a href="#">Innovation</a>
                </h5>
                <p className="text-center text-white-600">
                  We constantly evolve our technology stack, leveraging advanced AI algorithms and real-time analysis. Our commitment to innovation ensures that we stay ahead in the fight against deepfakes, adapting to emerging threats.
                </p>
              </div>
            </div>

            {/* Service Block 3 */}
            <div className="p-8 border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <div className="flex flex-col items-center">
                <div className="text-5xl text-blue-500 mb-4">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h5 className="text-xl font-bold mb-2">
                  <a href="#">Mission</a>
                </h5>
                <p className="text-center text-white-600">
                  The World Economic Forum estimates that deepfake financial fraud and AI-related crimes could cost $10.5 trillion globally by 2025, leading to significant social and economic disruption. Our mission is to promote a transparent and trustworthy digital world, protecting institutions and individuals from such threats.
                </p>
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group">
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      </div>
    </div>
  );
}
