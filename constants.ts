
import type { EducationTopic, Solution } from './types';
import { ReportCategory } from './types';

export const EDUCATION_TOPICS: EducationTopic[] = [
  {
    id: 'woman-safety',
    title: 'Woman Safety',
    thumbnail: 'https://picsum.photos/seed/woman-safety/400/300',
    shortDescription: 'Essential safety tips and legal rights for women in public and private spaces.',
    fullText: 'Ensuring women\'s safety is a collective responsibility. Key measures include being aware of your surroundings, carrying safety devices, and knowing emergency contact numbers. Legal frameworks like the Protection of Women from Domestic Violence Act, 2005, and laws against sexual harassment at the workplace provide crucial protection. It is vital for women to be informed about their rights and the procedures for reporting crimes.',
  },
  {
    id: 'illiteracy',
    title: 'Combating Illiteracy',
    thumbnail: 'https://picsum.photos/seed/illiteracy/400/300',
    shortDescription: 'Understanding the impact of illiteracy and ways to contribute to adult education programs.',
    fullText: 'Illiteracy is a significant barrier to social and economic development. It limits opportunities and perpetuates poverty. Community-driven adult literacy programs, volunteering as a tutor, and donating to educational NGOs are effective ways to combat this issue. The government\'s National Literacy Mission aims to make citizens functionally literate, empowering them to participate fully in society.',
  },
  {
    id: 'education',
    title: 'Right to Education',
    thumbnail: 'https://picsum.photos/seed/education/400/300',
    shortDescription: 'The Right to Education Act (RTE) ensures free and compulsory education for children.',
    fullText: 'The Right of Children to Free and Compulsory Education (RTE) Act, 2009, is a landmark legislation that makes education a fundamental right for every child between the ages of 6 and 14. This act mandates that all private schools reserve 25% of their seats for children from economically weaker sections. Citizens can play a role by ensuring children in their community are enrolled in school and reporting any violations of the RTE Act.',
  },
  {
    id: 'corruption',
    title: 'Fighting Corruption',
    thumbnail: 'https://picsum.photos/seed/corruption/400/300',
    shortDescription: 'How to identify and report corruption using tools like the Right to Information (RTI) Act.',
    fullText: 'Corruption undermines democracy and the rule of law. Citizens can fight corruption by refusing to pay bribes and reporting demands for them. The Right to Information (RTI) Act, 2005, is a powerful tool that empowers citizens to seek information from public authorities, promoting transparency and accountability. Filing an RTI application can expose malpractices and ensure public officials perform their duties honestly.',
  },
  {
    id: 'pollution',
    title: 'Pollution Control',
    thumbnail: 'https://picsum.photos/seed/pollution/400/300',
    shortDescription: 'Simple steps to reduce personal carbon footprint and combat environmental pollution.',
    fullText: 'Pollution poses a severe threat to public health and the environment. Individual actions, when multiplied, can make a significant difference. Reducing, reusing, and recycling waste, conserving water and electricity, using public transport, and planting trees are effective ways to reduce pollution. Reporting environmental violations to the local Pollution Control Board is also a crucial civic duty.',
  },
  {
    id: 'sanitation',
    title: 'Basic Sanitation',
    thumbnail: 'https://picsum.photos/seed/sanitation/400/300',
    shortDescription: 'The importance of proper sanitation and its role in public health.',
    fullText: 'Access to basic sanitation is essential for public health and dignity. Poor sanitation leads to the spread of diseases like cholera, typhoid, and diarrhea. The Swachh Bharat Mission is a nationwide campaign to eliminate open defecation and improve solid waste management. Citizens can contribute by maintaining cleanliness in their surroundings and promoting the use of toilets.',
  },
  {
    id: 'healthcare',
    title: 'Access to Healthcare',
    thumbnail: 'https://picsum.photos/seed/healthcare/400/300',
    shortDescription: 'Understanding your rights to public healthcare services and government schemes.',
    fullText: 'Affordable healthcare is a critical need. The government runs various schemes like Ayushman Bharat to provide health insurance to the underprivileged. Citizens should be aware of the public healthcare facilities available in their area, such as Primary Health Centers (PHCs). Understanding your rights as a patient and demanding quality service from public hospitals is essential.',
  },
  {
    id: 'traffic',
    title: 'Traffic Rules',
    thumbnail: 'https://picsum.photos/seed/traffic/400/300',
    shortDescription: 'The significance of adhering to traffic regulations for road safety.',
    fullText: 'Following traffic rules is non-negotiable for ensuring road safety for everyone. Simple acts like wearing a helmet, using seatbelts, avoiding speeding, and not using a mobile phone while driving can save lives. Understanding road signs and respecting traffic signals creates a safer and more efficient traffic flow for all road users.',
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: 's1',
    category: ReportCategory.GarbageManagement,
    title: 'Garbage Overflow',
    thumbnail: 'https://picsum.photos/seed/garbage/400/300',
    steps: [
      'Document the issue with clear photos and note the exact location.',
      'Contact your local municipality or sanitation department via their official helpline or app.',
      'Provide them with the details and get a complaint reference ID.',
      'Follow up regularly using the reference ID until the issue is resolved.',
    ],
  },
  {
    id: 's2',
    category: ReportCategory.Potholes,
    title: 'Fixing Potholes',
    thumbnail: 'https://picsum.photos/seed/potholes/400/300',
    steps: [
      'Report the pothole on the official civic body website or app. Many cities have dedicated portals for road maintenance.',
      'Use social media to tag the official accounts of the municipal corporation and local representatives.',
      'Form a resident group to collectively submit a formal complaint to the local ward office.',
    ],
  },
  {
    id: 's3',
    category: ReportCategory.StreetlampIssue,
    title: 'Non-Functional Streetlamp',
    thumbnail: 'https://picsum.photos/seed/streetlamp/400/300',
    steps: [
      'Note the pole number, which is usually painted on the lamp post.',
      'Call the electricity board or the municipal department responsible for street lighting.',
      'File a complaint with the pole number and location details.',
      'If the issue persists, escalate it to a higher authority within the department.',
    ],
  },
    {
    id: 's4',
    category: ReportCategory.WaterLogging,
    title: 'Dealing with Water Logging',
    thumbnail: 'https://picsum.photos/seed/waterlogging/400/300',
    steps: [
      'Immediately report the water logging to the local civic body\'s disaster management or monsoon helpline.',
      'Check for and clear any small blockages in nearby drains if it is safe to do so.',
      'Avoid wading through stagnant water to prevent water-borne diseases.',
      'Advocate for regular pre-monsoon cleaning of drains in your area through your residents\' association.',
    ],
  },
    {
    id: 's5',
    category: ReportCategory.OpenDrainage,
    title: 'Uncovered or Open Drains',
    thumbnail: 'https://picsum.photos/seed/drainage/400/300',
    steps: [
      'This is a major safety hazard. Report it immediately to the municipal corporation.',
      'Take photos and share them on public forums and social media to draw attention.',
      'Submit a written complaint to the local ward office, highlighting the danger to pedestrians, especially children and the elderly.',
    ],
  },
];
