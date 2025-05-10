import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Andy](/images/LinkedIn-profile-small.jpeg)

Hey there! I'm Andy, a Cloud Solutions Engineer who likes to help with consulting to bring enterprise solutions experience to small business problems.

I've been doing self learning through a homelab throughout my 15+ year career in tech and found it to be a great way to learn and test out new cloud services technology.

I've had experience in Cloud PaaS (AWS, GCP, OCI), Cloud Security & Governance (Wiz), Cybersecurity, IaC (Terraform, Cloudformation), CICD (Gitlab, Jenkins), Containers (Docker, ECS), Cloud networking (domains, DNS, proxy, CDNs, Cloudflare), and websites (SSG, Jamstack)

I've gone from simple web hosting to open source, container based applications behind a nginx proxy manager reverse proxy for self-hosting.

I feel like I can provide cost-efficient value to small businesses which are unecessarily paying for expensive web hosting solutions. 

Through consulting services, I can help small businesses acheive simplicity, quality and real value for their online businesses.

Let's go on an adventure!

Andy`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Andy and his homelab services",
    openGraph: {
      title: "About Me",
      description: "Learn more about Andy and his homelab services",
      images: [
        signOgImageUrl({
          title: "Andy",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
