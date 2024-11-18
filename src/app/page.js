import Image from "next/image";
import Link from "next/link";
import { TbCircleArrowUpRight } from "react-icons/tb";
import { FaRegPaperPlane, FaGithub, FaStackOverflow  } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiFlutterFill } from "react-icons/ri";
import { SiHuggingface, SiPython, SiFirebase, SiGooglemaps } from "react-icons/si";

export default function Home() {
  return (
    <div>
      {/* First impression of the home page */}
      <div className="flex flex-row flex-wrap-reverse mt-10 place-items-center justify-center
                      md:px-16
                      lg:px-20">
        <div className="mt-10 text-center basis-2/3 tracking-widest font-[family-name:var(--font-titillium-web-light)]
                        md:text-justify">
          <p className="text-3xl
                        lg:text-5xl
                        xl:text-6xl 
                        2xl:text-6xl">
            Hi, I'm <span className="text-secondary">Ritchie</span>
          </p>
          <p className="my-4 text-4xl font-[family-name:var(--font-titillium-web-bold)]
                        lg:text-5xl">
            Software Engineer
          </p>
          <p className="text-lg
                        lg:text-2xl">
            based in Penang, Malaysia <br/>
            Major in AI and minor in Mathematics
          </p>
          <div className="flex flex-row items-center justify-center gap-10
                          md:justify-start md:gap-20
                          lg:gap-36">
            <a
              className="text-sm my-4 p-2 flex flex-row items-center gap-3 bg-secondary rounded-xl text-background font-[family-name:var(--font-titillium-web-semi-bold)]
                         lg:text-lg"
              href="mailto:ritchiepoh@gmail.com"
              target="_blank"
            >
              Let's Chat! <FaRegPaperPlane color="white"/> 
            </a>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <a href="https://www.linkedin.com/in/ritchie-p/" target="_blank"><CiLinkedin className="h-6 w-6 md:h-9 md:w-9 lg:w-10 lg:h-10"/></a>
              <a href="https://github.com/RitchieP" target="_blank"><FaGithub className="h-6 w-6 md:h-9 md:w-9 lg:w-10 lg:h-10"/></a>
              <a href="https://stackoverflow.com/users/13328625/invalidhop" target="_blank"><FaStackOverflow className="h-6 w-6 md:h-9 md:w-9 lg:w-10 lg:h-10"/></a>
            </div>
          </div>
        </div>

        {/* Image of me */}
        <div className="basis-1/3">
          <Image
            className="rounded-full border-2 border-secondary p-5 min-w-52"
            src="/profile_pic.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Experience section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left">Experience</p>
      <div className="flex flex-col my-5 px-10 text-center
                      lg:px-20 lg:text-left">
        <div className="mt-5">
          <p className="text-2xl font-[family-name:var(--font-titillium-web-semi-bold)]
                        lg:text-3xl">
            Part time <span className="text-secondary">Research and Development Engineer</span> @ Assassins Robotics
          </p>
          <p className="text-unhighlighted text-sm font-[family-name:var(--font-titillium-web-light)]">January 2019 - Present</p>
          <ul className="text-lg text-justify leading-relaxed list-disc px-10 my-5 font-[family-name:var(--font-titillium-web-regular)]
                         md:text-xl">
            <li>Research and develop advanced robotics toolkits and algorithms with Python.</li>
            <li>Teaches students aged 7 to 15 about concepts in robotics and programming.</li>
            <li>Prepares students for tournaments, this includes brainstorming ideas, extensive testing on the robot, preparing test logs, and presentation practices.</li>
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-2xl font-[family-name:var(--font-titillium-web-semi-bold)]
                        lg:text-3xl">
            <span className="text-secondary">Software Engineer Intern</span> @ CodeTrace Sdn Bhd
          </p>
          <p className="text-unhighlighted text-sm font-[family-name:var(--font-titillium-web-light)]">March 2023 - August 2023</p>
          <ul className="text-lg text-justify leading-relaxed list-disc px-10 my-5 font-[family-name:var(--font-titillium-web-regular)]
                         md:text-xl">
            <li>Developed and shipped an automated PDF data extraction software using ReactJS and Python. Wrapped into a desktop application using ElectronJS.</li>
            <li>Built and hosted an inventory management system with ReactJS combined with Tailwind CSS connected to a Firebase backend.</li>
          </ul>
        </div>
      </div>

      {/* Projects section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left">Projects</p>
      <div className="grid grid-cols-1 gap-10 p-10 place-items-center
                      lg:px-20 lg:grid-cols-2">
        
        <div className="w-[360px] md:w-[480px] lg:w-[360px]">
          <div className="w-[360px] md:w-[480px] lg:w-[360px] grid grid-cols-1 grid-rows-1 items-end">
            <Image 
              src="/verbalex.png" 
              alt="VerbaLex Thumbnail" 
              width={542} 
              height={365} 
              priority
              className="rounded-3xl col-start-1 row-start-1"
            />
            <div className="bg-white/50 backdrop-blur-[2px] col-start-1 row-start-1 rounded-b-3xl flex flex-row items-center px-10 py-2 gap-10 text-sm
                            md:text-md">
              <div className="place-items-center">
                <RiFlutterFill className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Flutter</p>
              </div>
              <div className="place-items-center">
                <SiHuggingface className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Huggingface</p>
              </div>
              <div className="place-items-center">
                <SiPython className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Python</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row place-items-center justify-between">
            <p className="pt-4 text-4xl font-[family-name:var(--font-titillium-web-semi-bold)]">VerbaLex</p>
            <Link href={"https://github.com/RitchieP/VerbaLex"} target="blank"><TbCircleArrowUpRight className="size-8 md:size-10 lg:size-9"/></Link>
          </div>
          <p className="text-lg text-unhighlighted font-[family-name:var(--font-titillium-web-regular)]">Text-to-speech application to help transcribe accented speech.</p>
        </div>

        <div className="w-[360px] md:w-[480px] lg:w-[360px]">
          <div className="w-[360px] md:w-[480px] lg:w-[360px] grid grid-cols-1 grid-rows-1 items-end">
            <Image 
              src="/myrescue.png" 
              alt="MyRescue Thumbnail" 
              width={542} 
              height={365} 
              priority
              className="rounded-3xl col-start-1 row-start-1"
            />
            <div className="bg-white/50 backdrop-blur-[2px] col-start-1 row-start-1 rounded-b-3xl flex flex-row items-center px-10 py-2 gap-10 text-sm">
              <div className="place-items-center">
                <RiFlutterFill className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Flutter</p>
              </div>
              <div className="place-items-center">
                <SiFirebase className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Firebase</p>
              </div>
              <div className="place-items-center">
                <SiGooglemaps className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Google Maps API</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row place-items-center justify-between">
            <p className="pt-4 text-4xl font-[family-name:var(--font-titillium-web-semi-bold)]">MyRescue</p>
            <a href="https://github.com/RitchieP/my_rescue" target="blank"><TbCircleArrowUpRight className="size-8 md:size-10 lg:size-9"/></a>
          </div>
          <p className="text-lg text-unhighlighted font-[family-name:var(--font-titillium-web-regular)]">Resource management system during a natural disaster.</p>
        </div>

        <div className="w-[360px] md:w-[480px] lg:w-[360px]">
          {/* TODO: Replace this with Image later */}
          <div className="w-[360px] md:w-[480px] lg:w-[360px] grid grid-cols-1 grid-rows-1 items-end">
            <Image 
              src="/myusm.png" 
              alt="MyUSM Thumbnail" 
              width={542} 
              height={365} 
              priority
              className="rounded-3xl col-start-1 row-start-1"
            />
            <div className="bg-white/50 backdrop-blur-[2px] col-start-1 row-start-1 rounded-b-3xl flex flex-row items-center px-10 py-2 gap-10 text-sm">
              <div className="place-items-center">
                <RiFlutterFill className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Flutter</p>
              </div>
              <div className="place-items-center">
                <SiFirebase className="h-5 w-5 md:h-8 md:w-8 lg:h-5 lg:w-5"/>
                <p>Firebase</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row place-items-center justify-between">
            <p className="pt-4 text-4xl font-[family-name:var(--font-titillium-web-semi-bold)]">MyUSM</p>
            <a href="https://github.com/GDSC-USM/MyUSM" target="blank"><TbCircleArrowUpRight className="size-8 md:size-10 lg:size-9"/></a>
          </div>
          <p className="text-lg text-unhighlighted font-[family-name:var(--font-titillium-web-regular)]">Centralized information system for all individuals associated with Universiti Sains Malaysia.</p>
        </div>

      </div>

      {/* Skills section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left">Skills</p>
      <div className="my-10 flex flex-col justify-center place-items-center place-content-center gap-10 text-center
                      md:grid md:grid-cols-2
                      lg:px-20 lg:flex lg:flex-row lg:justify-between lg:place-items-start lg:text-left">
        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Frontend</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>ReactJS</li>
            <li>Tailwind CSS</li>
            <li>Flutter</li>
          </ul>
        </div>

        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Backend</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Soft Skills</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>Collaboration</li>
            <li>Effective Communication</li>
            <li>Leadership</li>
            <li>Analytical Thinking</li>
          </ul>
        </div>

        <div>
          <p className="text-3xl font-[family-name:var(--font-titillium-web-bold)]">Others</p>
          <ul className="mt-4 text-2xl font-[family-name:var(--font-titillium-web-regular)]">
            <li>Python</li>
            <li>ElectronJS</li>
            <li>Google Cloud Services</li>
          </ul>
        </div>

      </div>

      {/* About me section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left">How I got here?</p>
      <div className="p-10 text-xl text-justify font-[family-name:var(--font-titillium-web-regular)]
                      lg:px-20">
        <p>
        My story as a developer began back in <span className="text-secondary">2016</span>, when I joined the robotics club back in high school. That was the first ever time I was able to turn a few lines of blocks into actual output, tangible by hand.
        <br/>
        <br/>
        After graduating from high school, I furthered studies in Computer Sciences for my pre-university program and continued the trend at <span className="text-secondary">Universiti Sains Malaysia (USM)</span>.
        <br/>
        <br/>
        At USM, I joined the Google Developer Groups on Campus (aka. Google Developer Student Clubs back then), it was my first time getting in touch with developer communities and it was so vibrant and full of positivity and energy. Eventually I moved on to become a <span className="text-secondary">GDG George Town</span> Co-Lead today.
        <br/>
        <br/>
        I was also fortunate enough to join <span className="text-secondary">CodeTrace</span> as a Software Engineer Intern where I really had an insight into how factories and manufacturing lines leverages AI in scanning barcodes and machine vision.
        <br/>
        <br/>
        All these opportunities has allowed to learn from various industry professionals and made valuable connections. And I’m currently applying all my knowledge and expertise to help an academy that teaches students about robotics (What a round of events!). And guess what? I love what I’m doing!
        </p>
      </div>

      {/* Contact me section */}
      <p className="mt-10 px-10 text-5xl text-center font-[family-name:var(--font-titillium-web-bold)]
                    lg:px-20 lg:text-left">Interested in <span className="text-secondary">joining forces?</span></p>
      <div className="px-10 mb-10 grid grid-cols-3
                      md:grid-cols-5
                      lg:px-20 lg:grid-cols-10">
        <a
          className="my-8 p-2 flex flex-row items-center justify-center text-xs col-start-2 gap-3 bg-secondary rounded-xl text-background font-[family-name:var(--font-titillium-web-semi-bold)]
                     md:col-start-3 md:text-lg
                     lg:col-start-1 lg:col-span-2 lg:text-xl"
          href="mailto:ritchiepoh@gmail.com"
          target="_blank"
        >
          Let's Chat! <FaRegPaperPlane color="white"/> 
        </a>
      </div>
    </div>
  );
}
