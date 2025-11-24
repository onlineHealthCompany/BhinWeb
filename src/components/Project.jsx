import { useState } from 'react';
import '../App.css';

const Project = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({ title, section, children }) => (
    <div className="section">
      <button onClick={() => toggleSection(section)} className="section-button">
        <h2 className="section-title">{title}</h2>
        <div className="icon-container">
          <svg
            className={`icon ${openSections[section] ? 'rotated' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      {openSections[section] && <div className="content">{children}</div>}
    </div>
  );

  return (
    <div className="projects">
      <div className="container">
        <div className="sections-container">
          <Section title="BRAIN HEALTH LITERACY" section="literacy">
            <p className="content-paragraph">
              BHIN literacy project tagged ‘training the trainers’ seeks to
              inform and educate various target populations at various times on
              the importance of preserving brain health over the course of a
              person's life. This is achieved through a series of seminars,
              workshops, and interactive sessions. By promoting awareness and
              sensitization of brain health, we empower individuals to make
              informed decisions that support their brain well-being and overall
              fitness. Since brain health is an important topic in the context
              of a country's development, the organization works with other
              governmental and non-governmental organizations to achieve a wider
              reach.
            </p>
          </Section>

          <Section title="OLDER ADULT EMPOWERMENT" section="older-adult">
            <p className="content-paragraph">
              Brain Health Initiative Nigeria empowers older adults in the
              community by providing education, resources, and support to help
              them manage and prevent brain-related illnesses. The initiative
              focuses on raising awareness about cognitive health, offering
              training programs on maintaining brain health through diet,
              exercise, and mental stimulation. It also provides access to
              healthcare services, including screenings and early detection of
              conditions like dementia and Alzheimer’s, and promotes
              socio-economic empowerment through financial literacy and access
              to social services. Additionally, the initiative advocates for
              better healthcare policies, caregiver support, and resources for
              older adults to ensure they live healthier, more independent
              lives.
            </p>
            <p className="content-paragraph">
              Brain health initiative Nigeria aims to increase social contact in
              the community, maximize functional performance and physical
              exercise, improve behaviour, mood, and cognition, improve quality
              of life, and lower poverty among older adults who live in the
              community. To achieve this, the organization launched the ‘Empower
              to Enrich Program’ for older persons who live in impoverished
              communities and offers them socioeconomic empowerment to reinforce
              their vocation of interest. Subsequently, the BHIN team provides
              them with regular monitoring and follow-up.
            </p>
          </Section>

          <Section
            title="CAREGIVERS’ TRAINING AND SUPPORT"
            section="caregivers"
          >
            <p className="content-paragraph">
              Brain Health Initiative Nigeria (BHIN) organizes caregiver
              workshops on daily care techniques, safety, and communication
              strategies for individuals with cognitive impairments. We conduct
              quarterly Basic Caregivers’ Training for aspiring caregivers and
              caregivers of the elderly to promote healthy aging.
            </p>
            <p className="content-paragraph">
              The training sessions focus on educating trainees on age-related
              problems such as brain illnesses, early signs, the importance of
              early diagnosis, treatment options, and the role of preventive
              care in managing brain illnesses. The training also includes the
              general handling of the elderly, nutritional guidelines, oral
              healthcare, rehabilitation exercise and fall prevention
              strategies, coping mechanisms, and stress prevention for
              caregivers.
            </p>
            <p className="content-paragraph">
              We engage in raising awareness through social media campaigns,
              storytelling, and public demonstrations to bring attention to
              caregiving needs and brain illness challenges.
            </p>
          </Section>

          <Section title="SCHOOL HEALTH PROGRAM" section="school-health">
            <p className="content-paragraph">
              Brain Health Initiative Nigeria carries out a School Health
              Program aimed at promoting brain health and cognitive development
              among students. The program focuses on educating adolescents about
              the importance of lifestyles that promote brain health such as
              adequate nutrition, physical activity, sleep, and stress
              management. It encompasses interactive sessions on brain health
              awareness, the effects of social media, substance abuse, and
              building resilience. We intend to achieve a bigger picture of
              building critical thinking and problem-solving skills of
              adolescents. This, we believe, will prepare them to assume adult
              roles and equip them to contribute to national development. The
              initiative is also working to integrate brain health topics into
              the secondary school curriculum, ensuring students develop
              lifestyles that support long-term cognitive health and academic
              success.
            </p>
          </Section>

          <Section title="RESEARCH" section="research">
            <p className="content-paragraph">
              <strong>Shaping the Future of Healthy Ageing</strong>
              <br />
              At BHIN, our research explores the multifaceted process of ageing,
              recognizing the interplay of biological, psychological, and social
              factors. With the growing number of older adults and rising life
              expectancy, our work emphasizes promoting cognitive health and
              mental well-being in later life.
            </p>
            <p className="content-paragraph">
              Specifically, we aim to explore the self-reported effects of
              socioeconomic empowerment on different domains such as mental
              well-being, social interaction, financial stability, mood,
              cognition, and the quality of life of older adults. A baseline
              study performed indicated that this intervention could provide
              potential benefits for older adults.
            </p>
            <p className="content-paragraph">
              Currently, we aim to understand the public perceptions of brain
              health among the Nigerian population. This would serve as
              background for future studies to address significant gaps in
              knowledge and consequently inform interventions that promote
              prevention, early diagnosis, and management of brain health
              conditions. Additionally, we are conducting a systematic review on
              Teledementia to explore how telemedicine and digital innovations
              can enhance dementia care in Nigeria.
            </p>
            <p className="content-paragraph">
              Through these initiatives, BHIN is advancing evidence-based
              solutions for healthier, more fulfilling lives across the
              lifespan.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Project;
