
import React from 'react';
import { Tip, FaqItem } from './types';

export const LOG_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_102TFizr0y35gN13dd0f3HXAQgVTOxIuvPk4YucACvKEed0RxnvmLAr1FeprZiEGWWa3wdHdMmbuJg1FTNlKpmbq_TgZ_zk4Gx0PkSLPT4O-uxlSti7XWD3DqpFkNeq5ChCxJLVxNiHcYHrPV692OiqlSjzhP0tg3ENyXy_i2Pr7jNh8S_GLFPQWa0M/s320/Screenshot%202026-02-05%20233918.png";

export const CHOCOLATE_TYPES = [
  { name: 'White', theobromine: 0.25 },
  { name: 'Milk', theobromine: 58 },
  { name: 'Dark', theobromine: 130 },
  { name: 'Baker\'s', theobromine: 450 },
  { name: 'Cocoa Powder', theobromine: 800 },
];

export const AUTHORS = [
  { name: "Bassit the Dog", avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg75xwMY7MLNsAaQwBL3YO8EeLFFeVAynOoqjLbuK0HjAYJCqL3U5yWuYSrvb3n88XNBvYjwXFoe6SZTLmSfmDlWvN2OtP5ISwT935kjH4rhDS5l5adTu2DUyf5oTn0ex9_p9xXe9IxMBVR4vzrGyyflW5CRF-nXXpifIvzqyWcjdbq0U_IKLl9GzpuTw/s1600/bassit.jpg", badge: "Certified Belly Rub Enjoyer" },
  { name: "Bebecat", avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisZoFXMnz0_ATVwDxgeIrQQDVzymrpg_YmUIuHJvCXM8z7IzdlxlNjj2G_gajSkMNQh-c-I5HWBugYGpb-bTVeNtV-a3vyZO26ydPLgs0j5w3biQymhMQ-uilRRb33RmWy6-8YnOjbZBkC4BXhZSREcXtx3jTkkoKIyEV2IJ6LODZGjlf1au2N6d-eIgs/s320/bebecat%20(1).jpg", badge: "Chonky" }
];

export const DOG_TIPS: Tip[] = [
  {
    title: "Understanding Facial Licking",
    description: "Affection or behavior? A deep dive into the evolutionary reasons dogs lick faces, from pack social status to grooming habits.",
    icon: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
    fullContent: "Facial licking is a complex behavior rooted in ancestry. Puppies lick their mothers' mouths to signal hunger, a trait inherited from wolves. In adulthood, it often transitions into a sign of social deference or simply an enthusiastic 'hello'. While generally harmless, it can be a way for dogs to gather sensory information about you through your skin's salt and pheromones. If it becomes excessive, it may indicate anxiety or a learned behavior for attention."
  },
  {
    title: "Puppy Teething Management",
    description: "Saving your furniture starts with providing appropriate textures. Learn which toys are safest for developing gums and milk teeth.",
    icon: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
    fullContent: "Teething usually peaks between 3 and 6 months. During this time, your puppy's gums will be sore and itchy. The key is redirection: always have a chew toy ready. Look for 'puppy-specific' rubber toys that are soft enough to have some 'give' but durable enough not to break. Avoid hard nylon bones or real marrow bones until adult teeth are fully set, as these can crack fragile milk teeth."
  },
  {
    title: "Cognitive Benefits of Sniffing",
    description: "The 'nose work' secret: Why 15 minutes of scent stimulation can provide more mental exhaustion than an hour-long walk.",
    icon: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=400",
    fullContent: "A dog's primary sense is smell. Engaging their nose activates the olfactory bulb, which is huge compared to humans. Allowing your dog to 'stop and smell the roses' on walks—or hiding treats around the house—provides intense mental stimulation. It lowers cortisol levels and helps anxious dogs focus on a task, leading to a calmer pet at home."
  },
  {
    title: "First Walk Essentials",
    description: "Prepare your pup for the world. A guide on leashes, harnesses, and how to introduce new sounds and sights safely.",
    icon: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=400",
    fullContent: "First walks should be short and positive. Start in a quiet area. Ensure your harness is 'two-finger' snug. Bring high-value treats to reward your puppy every time they look at you or ignore a distraction like a passing car. Socialization isn't just about meeting people; it's about observing the world calmly."
  },
  {
    title: "House Training 101",
    description: "The definitive guide to consistency. Learn the schedule that works and how to handle accidents without stress.",
    icon: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400",
    fullContent: "Puppies have tiny bladders. The golden rule is: out after eating, out after sleeping, and out after playing. Use a consistent 'potty word' and reward immediately after they finish. If an accident happens indoors, clean it with an enzymatic cleaner and don't punish them—they won't understand."
  },
  {
    title: "Understanding Barking",
    description: "Deciphering the noise. Is it boredom, alertness, or demand? How to respond to different types of barks.",
    icon: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400",
    fullContent: "Barking is communication. A sharp, high-pitched bark often means excitement or play. A repetitive, lower-pitched bark is usually an alert. Identify the trigger and address the underlying emotion."
  }
];

export const CAT_TIPS: Tip[] = [
  {
    title: "Deciphering Allogrooming",
    description: "Why your cat turns into dough. Kneading behavior is a vestige of kittenhood that signifies a high-level bond and security.",
    icon: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
    fullContent: "Kneading (or 'making biscuits') is one of the most common feline behaviors. Kittens knead their mothers to stimulate milk flow. As adults, they do this when they feel safe and comfortable. It's often accompanied by purring. Some cats also do this to mark their territory, as they have scent glands in their paws."
  },
  {
    title: "The Necessity of Verticality",
    description: "Cats are both predators and prey. Discover how adding shelves and cat trees reduces stress and prevents territorial aggression.",
    icon: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=400",
    fullContent: "Cats feel safest when they can survey their 'kingdom' from above. Vertical space allows them to avoid conflict with other pets or children. A simple cat tree or cleared bookshelf can significantly reduce anxiety. In multi-cat households, verticality prevents 'bottlenecks' in rooms."
  },
  {
    title: "Slow Blink: Interspecies Trust",
    description: "Communicating affection in feline language. Studies show that slow-blinking at your cat can mirror their trust back to you.",
    icon: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1470&auto=format&fit=crop&q=80&w=400",
    fullContent: "A direct stare is often seen as a threat in the cat world. Closing one's eyes in the presence of another is a sign of extreme vulnerability and trust. By looking at your cat and slowly closing and opening your eyes, you are telling them you are not a threat and that you care for them."
  },
  {
    title: "Litter Box Placement",
    description: "Location is everything. Why privacy and escape routes matter for your cat's bathroom habits.",
    icon: "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?auto=format&fit=crop&q=80&w=400",
    fullContent: "Avoid placing litter boxes in noisy laundry rooms or near loud appliances. Cats prefer a 'low-traffic' area where they can see who is coming. Rule of thumb: one box per cat, plus one extra. Keep them away from food and water bowls."
  },
  {
    title: "Scratching Solutions",
    description: "Protect your furniture by understanding cat instincts. How to choose the right scratching post texture.",
    icon: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=400",
    fullContent: "Scratching is a physical need—it sheds old claw sheaths and stretches their muscles. Observe your cat: do they scratch horizontally (on rugs) or vertically (on sofa arms)? Buy posts that match their preference. Sisal rope and cardboard are favorites."
  },
  {
    title: "Playtime Mastery",
    description: "The 'hunt-catch-kill-eat' cycle. Why structured play prevents midnight zoomies and aggression.",
    icon: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=400",
    fullContent: "Indoor cats need an outlet for their predatory drive. Use wand toys to mimic birds or mice. Let them stalk, chase, and finally 'catch' the toy. Finishing a play session with a small treat or meal satisfies the biological cycle."
  }
];

export const SITE_STATS = [
  { label: "Pet Parents", value: "2.5k+", icon: "👥" },
  { label: "Pet Breeds", value: "450+", icon: "🐾" },
  { label: "Beginner Guides", value: "100+", icon: "📚" },
];

export interface ExoticCareItem {
  title: string;
  description: string;
  fullContent: string;
  habitat: string;
  diet: string;
  lifespan: string;
  careLevel: 'Easy' | 'Intermediate' | 'Advanced';
  img: string;
}

export const EXOTIC_CARE: ExoticCareItem[] = [
  { 
    title: "Small Mammal Care", 
    description: "From hamsters to guinea pigs, learn the specialized needs of small pets.",
    fullContent: "Small mammals require specific habitats and diets. Guinea pigs need supplemental Vitamin C, while hamsters require deep bedding for burrowing. Always ensure their enclosures are escape-proof and away from direct sunlight or drafts. Daily social interaction is key to their mental wellbeing.",
    habitat: "Well-ventilated cage with solid flooring and deep absorbent bedding.",
    diet: "Species-specific pellets, fresh hay, and leafy greens.",
    lifespan: "2 to 8 years depending on species.",
    careLevel: "Intermediate",
    img: "https://images.unsplash.com/photo-1612267168669-679c961c5b31?q=80&w=1470&auto=format&fit=crop&q=80&w=400" 
  },
  { 
    title: "Wildlife Interaction", 
    description: "Guidelines on how to safely observe and interact with local backyard wildlife.",
    fullContent: "Observing wildlife can be rewarding, but it's important to keep a safe distance. Never feed wild animals processed foods. If you find injured wildlife, contact a local licensed rehabber immediately. Helping local biodiversity starts with native plants and avoiding harsh pesticides in your yard.",
    habitat: "Natural ecosystems and local backyards.",
    diet: "Natural forage; avoid human-provided processed food.",
    lifespan: "Varies greatly by species.",
    careLevel: "Easy",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    title: "Avian Wellness", 
    description: "Essential health tips for pet birds, from nutrition to environmental enrichment.",
    fullContent: "Birds are highly intelligent and sensitive creatures. They require a varied diet beyond just seeds, including fresh vegetables and pellets. Clean air is vital; avoid using non-stick pans or aerosol sprays near them. Provide plenty of toys to prevent boredom and feather-plucking behaviors.",
    habitat: "Spacious flight cage with varying perch sizes and natural light.",
    diet: "High-quality pellets, seeds in moderation, and fresh produce.",
    lifespan: "10 to 50+ years depending on breed.",
    careLevel: "Advanced",
    img: "https://images.unsplash.com/photo-1645164284684-0afd0d700a1b?q=80&w=1471&auto=format&fit=crop&q=80&w=400" 
  }
];

export const COMMON_PROBLEMS: FaqItem[] = [
  {
    question: "Why is my puppy vocalizing at night?",
    answer: "This is typical separation anxiety. They miss the proximity of their litter. Use a warm towel or a 'heartbeat' plush toy in their crate to provide comfort."
  },
  {
    question: "Managing destructive scratching in cats?",
    answer: "Identify their preferred material (sisal, cardboard, wood) and orientation (vertical/horizontal). Place scratchers near furniture they target and use catnip to attract them."
  },
  {
    question: "How do I stop my cat from jumping on counters?",
    answer: "Provide vertical alternatives like cat trees. Use double-sided tape or aluminum foil temporarily on surfaces. Never punish; instead, reward them when they use their designated high spots."
  },
  {
    question: "My dog pulls on the leash during walks, help!",
    answer: "Try a front-clip harness for better control. Practice 'stop-and-go' training: stop walking the moment the leash goes taut, and only continue when it slackens. Reward your dog for looking back at you."
  },
  {
    question: "How often should I bathe my pet?",
    answer: "Most cats rarely need baths as they are self-grooming. Dogs generally need a bath every 4-8 weeks depending on their coat type and activity level. Over-bathing can strip essential oils from their skin."
  },
  {
    question: "Dealing with 'midnight zoomies' in cats?",
    answer: "Ensure a vigorous play session about 30 minutes before bed to satisfy their hunting instinct. Follow this with a small meal to trigger their natural 'groom and sleep' cycle."
  }
];

export const ICONS = {
  Logo: ({ className = "w-12 h-12" }: { className?: string }) => (
    <img 
      src={LOG_URL} 
      alt="DogeMeow Logo" 
      className={`${className} object-contain`}
    />
  )
};
