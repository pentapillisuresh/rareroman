
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Gem,
  Handshake,
  Award,
  Users,
} from "lucide-react";

const features = [
  { no:"01", title:"Authenticity Guaranteed", desc:"Every collection is carefully inspected by experienced specialists." },
  { no:"02", title:"Professional Evaluation", desc:"We assess historical significance, rarity and market value." },
  { no:"03", title:"Global Network", desc:"Trusted relationships with collectors, museums and investors worldwide." },
  { no:"04", title:"Secure Transactions", desc:"Professional handling with complete confidentiality." },
  { no:"05", title:"Fair Market Pricing", desc:"Transparent valuations based on international demand." },
  { no:"06", title:"Personalized Service", desc:"Dedicated guidance from experienced specialists." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-semibold">
            WHY CHOOSE US
          </span>
          <h2 className="text-5xl font-serif font-bold text-white mt-5">
            Excellence Built <br />
            <span className="text-[#D9AF58]">On Trust</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-6">
            Rare Roman Antiques is built on authenticity, integrity and respect for history.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {features.map((item)=>(
              <motion.div
                key={item.no}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                className="flex gap-6 border-b border-white/10 pb-8"
              >
                <div className="w-16 h-16 rounded-full border border-[#D9AF58]/40 bg-[#D9AF58]/10 flex items-center justify-center">
                  <span className="text-[#D9AF58] text-xl font-bold">{item.no}</span>
                </div>

                <div>
                  <h3 className="text-white font-serif text-2xl mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-7">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >
            <img
              src="/images/why.png"
              alt="Leadership"
              className="w-full h-[700px] object-cover rounded-[30px] border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
