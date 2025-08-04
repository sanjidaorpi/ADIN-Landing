'use client'

import { useState } from 'react'

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [openQuestion, setOpenQuestion] = useState(-1)

  const generalQuestions = [
    {
      question: 'What is ADIN?',
      answer: "ADIN is an AI-first, community-powered venture DAO that combines a network of AI-agents with human insight to identify and fund the best early-stage startups. Its engine ingests a company's deck or website and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from a five-agent AI 'venture board.' Investors review these data-rich findings and vote. By marrying AI's analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more transparent capital deployment and broader access to high-potential deals."
    },
    {
      question: 'How is ADIN structured?',
      answer: "ADIN's governance rests on three pillars: Investors (Limited Partners) supply capital, can propose companies, and cast votes on surfaced deals; Network Members—a hand-picked cohort of founders, operators, and others—source promising startups and share in the upside when their finds are funded; and Tribute Labs, the limited general partner, who handles the day-to-day operations and portfolio management of the DAO, along with the limited discretion to veto any investment approved by DAO investors."
    },
    {
      question: 'What industries does ADIN focus on?',
      answer: "Initially ADIN will focus on pre-seed, seed, and Series A deals, with a focus on AI, blockchain/crypto, consumer robotics and hardware, quantum, and other transformative sectors. ADIN is sector-agnostic and will be able to adapt going forward, identifying high-potential opportunities across diverse industries. ADIN will focus on areas with strong growth trajectories and innovative solutions and adjust based on deals submitted by investors and members of the network."
    },
    {
      question: 'Will tokenization fit into ADIN\'s model?',
      answer: 'Yes, tokenization is a core component of our model. We believe in the power of tokenized assets to democratize access to investment opportunities and create more liquid markets for early-stage companies.'
    },
    {
      question: 'How can I join the network?',
      answer: "Our Network Members represent a carefully selected community of founders, operators, and domain experts. These individuals either apply through our rigorous vetting process or receive personal invitations based on their exceptional track records. Each candidate submits their credentials and expertise, which our team meticulously evaluates to maintain the network's high standards. As an investor, you'll be able to connect with this exclusive group of industry leaders whose insights and deal flow should significantly enhance the DAO's performance and investment opportunities."
    },
    {
      question: 'Who made ADIN?',
      answer: "Created by Tribute Labs, ADIN reimagines venture capital by fusing decentralized decision-making with an AI agent network. Investors and a hand-picked cadre of Network Members source and vote on deals, while advanced AI automates diligence and ranking, accelerating funding and grounding choices in data. This hybrid approach aims to ensure unprecedented efficiency in channeling capital to the most promising startups, with the transparency and collective wisdom that only a well-designed decentralized system can deliver."
    }
  ]

  const pricingQuestions = [
    {
      question: 'What are the investment minimums?',
      answer: 'Investment minimum is $50,000 with limited exceptions.'
    },
    {
      question: 'What are the management fees?',
      answer: "ADIN operates with a member-friendly fee structure, featuring a lower-than-market-average 1% management fee and a 20% performance fee (carry). This carry is split between Tribute Labs and the specific Investor or Network Member who sourced each successful deal, creating direct deal-by-deal incentives. When deals you source perform well, you share in the upside through your portion of the carry. This aligned approach ensures greater returns flow directly back to Investors while rewarding those who identify promising opportunities."
    }
  ]

  const questions = activeTab === 'general' ? generalQuestions : pricingQuestions

  return (
    <section className="bg-white pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-28 lg:pb-32 -mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-left mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-2 sm:mb-6">
            Frequently<br />asked questions.
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light mb-8 sm:mb-0">
            Here is a collection of what is asked most about ADIN.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="text-left -mb-2 sm:mb-0 -mt-6 pt-4 sm:pt-0">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex items-center space-x-1 px-2 py-1 sm:px-6 sm:py-2 rounded-full transition-colors border whitespace-nowrap text-xs sm:text-sm ${
                activeTab === 'general'
                  ? 'bg-adin-purple text-white border-adin-purple'
                  : 'border-[#E1D1FA] text-adin-purple hover:text-adin-purple hover:border-[#E1D1FA] hover:bg-[#F3EAFD]'
              }`}
            >
              <span className="font-normal text-xs sm:text-sm md:text-base">General</span>
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex items-center space-x-1 px-2 py-1 sm:px-6 sm:py-2 rounded-full transition-colors border whitespace-nowrap text-xs sm:text-sm ${
                activeTab === 'pricing'
                  ? 'bg-adin-purple text-white border-adin-purple'
                  : 'border-[#E1D1FA] text-adin-purple hover:text-adin-purple hover:border-[#E1D1FA] hover:bg-[#F3EAFD]'
              }`}
            >
              <span className="font-normal text-xs sm:text-sm md:text-base">Pricing</span>
            </button>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {questions.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <div className={`w-full text-left flex items-center justify-between bg-white ${
                openQuestion === index ? 'py-6 sm:py-12 pt-6 sm:pt-12 pb-0' : 'py-6 sm:py-12'
              }`}>
                <span className="font-medium text-gray-900 text-sm sm:text-lg md:text-xl pr-4">{item.question}</span>
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                  className="flex-shrink-0"
                >
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                    openQuestion === index ? 'bg-white border-[#A97DF5]' : 'bg-white border-[#E1D1FA]'
                  }`}>
                    <ion-icon 
                      name={openQuestion === index ? "chevron-up" : "chevron-down"}
                      className={`transition-all duration-200 ${
                        openQuestion === index ? 'text-[#A97DF5]' : 'text-gray-400'
                      }`}
                      style={{ fontSize: '12px' }}
                    ></ion-icon>
                  </div>
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-600 ease-in-out relative z-10 ${
                openQuestion === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className={`pt-4 pb-6 sm:pb-12 bg-white transition-opacity duration-500 ease-in-out ${
                  openQuestion === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative z-20">
                    {item.answer}
                  </p>
                </div>
              </div>
              {index < questions.length - 1 && <div className="h-px bg-[#F3EAFD]"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection 