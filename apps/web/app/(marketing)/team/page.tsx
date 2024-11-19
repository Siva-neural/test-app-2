import Link from 'next/link';
import Image from 'next/image';
import { Hero, SecondaryHero } from '@kit/ui/marketing';

// Define the types for the props
interface AdvisoryCardProps {
  imageSrc: string;
  name: string;
  designation: string;
  linkedin: string;
  logoSrc: string;
}

// TeamSection component
const TeamSection = () => {
  return (
    <div className="mt-8">
      {/* Team Section Title and Description */}
      <div className="text-center mb-8">
      <SecondaryHero
        heading="Our Team"
        subheading='Team Behind the Innovation'
              />
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Team Member 2 */}
        <div className="team-block_one p-4">
          <div className="team-block_one-inner text-center">
            <div className="team-block_one-image">
              <Link href="#">
                <Image
                  src="/images/sumit.jpeg"
                  alt="Sumit Singh"
                  width={200}
                  height={200}
                  className="rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-2"
                />
              </Link>
            </div>
            <h4 className="team-block_one-title">
              <Link href="https://www.linkedin.com/in/sumit-singh-kr">Sumit Singh</Link>
            </h4>
            <div className="team-block_one-designation">Co-founder & CDO</div>
          </div>
        </div>

        {/* Team Member 1 */}
        <div className="team-block_one p-4">
          <div className="team-block_one-inner text-center">
            <div className="team-block_one-image">
              <Link href="#">
                <Image
                  src="/images/piyush.jpeg"
                  alt="Piyush Verma"
                  width={200}
                  height={200}
                  className="rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-2"
                />
              </Link>
            </div>
            <h4 className="team-block_one-title">
              <Link href="https://www.linkedin.com/in/piyushverma7">Piyush Verma</Link>
            </h4>
            <div className="team-block_one-designation">Co-founder & CEO</div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="team-block_one p-4">
          <div className="team-block_one-inner text-center">
            <div className="team-block_one-image">
              <Link href="#">
                <Image
                  src="/images/siva.jpeg"
                  alt="Siva Shankar"
                  width={200}
                  height={200}
                  className="rounded-full transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-2"
                />
              </Link>
            </div>
            <h4 className="team-block_one-title">
              <Link href="https://www.linkedin.com/in/sivashankar001">Siva Shankar</Link>
            </h4>
            <div className="team-block_one-designation">Co-founder & CTO</div>
          </div>
        </div>
      </div>
    </div>
  );
};


const AdvisoryCard: React.FC<AdvisoryCardProps> = ({
  imageSrc,
  name,
  designation,
  linkedin,
  logoSrc,
}) => {
  return (
    <div className="flex overflow-hidden rounded-xl shadow-lg border border-gray-300 dark:border-gray-600 transition-transform transform hover:scale-105">
      {/* Left: Image Section (40%) */}
      <div className="w-2/5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <Link href={linkedin}>
          <Image
            src={imageSrc}
            alt={name}
            width={200}
            height={200}
            className="w-48 h-48 rounded-full object-cover" // Adjusted size and shape
          />
        </Link>
      </div>

      {/* Right: Text Section (60%) */}
      <div className="w-3/5 p-6 flex flex-col justify-between">
        {/* Name and Designation */}
        <div>
          <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
            <Link href={linkedin} className="hover:text-blue-500 transition-colors duration-300">
              {name}
            </Link>
          </h4>
          <div className="text-gray-600 dark:text-gray-300 mb-4">{designation}</div>
        </div>

        {/* Logo */}
        <div className="mt-2 flex items-center">
          <Image
            src={logoSrc}
            alt={`${name} Logo`}
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const AdvisorPage = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Team Member 1 */}
        <AdvisoryCard
          imageSrc="/images/manaswi.png"
          name="Manaswi Mishra"
          designation="Graduate Research Assistant"
          linkedin="##"
          logoSrc="/images/mit.png"
        />

        {/* Team Member 2 */}
        <AdvisoryCard
          imageSrc="/images/kapil.png"
          name="Kapil Vaidya"
          designation="Applied Scientist"
          linkedin="#"
          logoSrc="/images/aws.png"
        />

        
      </div>
    </div>
  );
};

const MentorPage = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Team Member 1 */}
        <AdvisoryCard
          imageSrc="/images/jeff.png"
          name="Jeff Lindholm"
          designation="CRO at Lookout"
          linkedin="##"
          logoSrc="/images/lookout_logo.png"
        />

        {/* Team Member 2 */}
        <AdvisoryCard
          imageSrc="/images/lee.png"
          name="Hikyu Lee"
          designation="President & CEO at Softlinx, Inc."
          linkedin="#"
          logoSrc="/images/softlinx.png"
        />

        {/* Team Member 3 */}
        <AdvisoryCard
          imageSrc="/images/paul.png"
          name="Paul Buta"
          designation="Adjunct Professor"
          linkedin=""
          logoSrc="/images/colby.png"
        />
        {/* Team Member 4 */}
        <AdvisoryCard
          imageSrc="/images/rob.png"
          name="Robert Gottlieb"
          designation="Co-founder, Managing Director"
          linkedin=""
          logoSrc="/images/robcol.png"
        />
      </div>
    </div>
  );
};

export default function TeamPage() {
  return (
    <div className="flex flex-col items-center space-y-24 py-14">
      {/* Team Section */}
      <TeamSection />
      {/* Centralized Container */}
      <div className="w-full max-w-5xl px-4">
        {/* Hero Section */}
        <SecondaryHero
        heading='Elite Advisors'
        subheading='AI leaders, and industry specialists.'
          
        />
        <AdvisorPage />
      </div>
      {/* Centralized Container */}
      <div className="w-full max-w-5xl px-4">
        {/* Hero Section */}
        <SecondaryHero
        heading='MIT VMS Mentors'
        subheading='We are privileged to welcome esteemed experts in democracy, whose guidance will be vital to advancing our mission.'
          
        />
        <MentorPage />
      </div>
    </div>
  );
}
