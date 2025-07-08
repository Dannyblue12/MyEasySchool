import {
  HiTrophy,
  HiSparkles,
  HiBookOpen,
  HiUsers,
  HiChartBar,
  HiClock,
  HiAcademicCap,
  HiPuzzlePiece,
  HiRocketLaunch,
  HiDevicePhoneMobile,
} from "react-icons/hi2";
import { OnboardingScreenTypes } from "@/types/onboardingTypes";

export const onboardingContents: OnboardingScreenTypes[] = [
  {
    id: 1,
    title: "Welcome to LearnQuest",
    subtitle: "Your Academic Journey Begins!",
    description:
      "Embark on an exciting learning adventure where every lesson is a quest to master new knowledge and unlock your potential.",
    color: "bg-gradient-to-br from-purple-100 to-blue-100",
    icon: <HiSparkles className="w-20 h-20 text-purple-500" />,
  },
  {
    id: 2,
    title: "Interactive Learning",
    subtitle: "Engage with dynamic content!",
    description:
      "Experience learning through interactive videos, quizzes, simulations, and hands-on projects that make education fun.",
    color: "bg-gradient-to-br from-blue-100 to-indigo-100",
    icon: <HiBookOpen className="w-20 h-20 text-blue-500" />,
  },
  {
    id: 3,
    title: "Track Your Progress",
    subtitle: "Level up with every lesson!",
    description:
      "Watch your knowledge grow as you complete courses, earn XP, unlock achievements, and climb the leaderboard.",
    color: "bg-gradient-to-br from-green-100 to-emerald-100",
    icon: <HiTrophy className="w-20 h-20 text-green-500" />,
  },
  {
    id: 4,
    title: "Join Study Groups",
    subtitle: "Learn together, grow together!",
    description:
      "Connect with fellow learners, share knowledge, participate in discussions, and compete in friendly academic challenges.",
    color: "bg-gradient-to-br from-orange-100 to-red-100",
    icon: <HiUsers className="w-20 h-20 text-orange-500" />,
  },
  {
    id: 5,
    title: "Smart Analytics",
    subtitle: "Insights that drive success!",
    description:
      "Get detailed analytics on your learning patterns, strengths, and areas for improvement with personalized recommendations.",
    color: "bg-gradient-to-br from-cyan-100 to-teal-100",
    icon: <HiChartBar className="w-20 h-20 text-cyan-500" />,
  },
  {
    id: 6,
    title: "Flexible Schedule",
    subtitle: "Learn at your own pace!",
    description:
      "Set your own study schedule, get reminders, and access content anytime, anywhere with our flexible learning system.",
    color: "bg-gradient-to-br from-amber-100 to-yellow-100",
    icon: <HiClock className="w-20 h-20 text-amber-500" />,
  },
  {
    id: 7,
    title: "Expert Instructors",
    subtitle: "Learn from the best!",
    description:
      "Access courses created by certified educators and industry experts who are passionate about sharing knowledge.",
    color: "bg-gradient-to-br from-rose-100 to-pink-100",
    icon: <HiAcademicCap className="w-20 h-20 text-rose-500" />,
  },
  {
    id: 8,
    title: "Gamified Learning",
    subtitle: "Make learning addictive!",
    description:
      "Earn points, unlock badges, complete challenges, and compete with friends in an engaging gamified environment.",
    color: "bg-gradient-to-br from-violet-100 to-purple-100",
    icon: <HiPuzzlePiece className="w-20 h-20 text-violet-500" />,
  },
  {
    id: 9,
    title: "Mobile Learning",
    subtitle: "Study on the go!",
    description:
      "Download content for offline access, sync across devices, and never miss a learning opportunity wherever you are.",
    color: "bg-gradient-to-br from-slate-100 to-gray-100",
    icon: <HiDevicePhoneMobile className="w-20 h-20 text-slate-500" />,
  },
  {
    id: 10,
    title: "Ready to Begin?",
    subtitle: "Your learning adventure awaits!",
    description:
      "Join thousands of learners who have already transformed their education. Start your journey today and unlock your potential!",
    color: "bg-gradient-to-br from-emerald-100 to-green-100",
    icon: <HiRocketLaunch className="w-20 h-20 text-emerald-500" />,
  },
];

// Alternative shorter version (5 screens)
// export const onboardingContentsShort: OnboardingScreenTypes[] = [
//   {
//     id: 1,
//     title: "Welcome to LearnQuest",
//     subtitle: "Your Academic Journey Begins!",
//     description:
//       "Embark on an exciting learning adventure where every lesson is a quest to master new knowledge and unlock your potential.",
//     color: "bg-gradient-to-br from-purple-100 to-blue-100",
//     icon: <HiSparkles className="w-20 h-20 text-purple-500" />,
//   },
//   {
//     id: 2,
//     title: "Interactive Learning",
//     subtitle: "Engage with dynamic content!",
//     description:
//       "Experience learning through interactive videos, quizzes, simulations, and hands-on projects that make education fun.",
//     color: "bg-gradient-to-br from-blue-100 to-indigo-100",
//     icon: <HiBookOpen className="w-20 h-20 text-blue-500" />,
//   },
//   {
//     id: 3,
//     title: "Track Your Progress",
//     subtitle: "Level up with every lesson!",
//     description:
//       "Watch your knowledge grow as you complete courses, earn XP, unlock achievements, and climb the leaderboard.",
//     color: "bg-gradient-to-br from-green-100 to-emerald-100",
//     icon: <HiTrophy className="w-20 h-20 text-green-500" />,
//   },
//   {
//     id: 4,
//     title: "Join Study Groups",
//     subtitle: "Learn together, grow together!",
//     description:
//       "Connect with fellow learners, share knowledge, participate in discussions, and compete in friendly academic challenges.",
//     color: "bg-gradient-to-br from-orange-100 to-red-100",
//     icon: <HiUsers className="w-20 h-20 text-orange-500" />,
//   },
//   {
//     id: 5,
//     title: "Ready to Begin?",
//     subtitle: "Your learning adventure awaits!",
//     description:
//       "Join thousands of learners who have already transformed their education. Start your journey today and unlock your potential!",
//     color: "bg-gradient-to-br from-emerald-100 to-green-100",
//     icon: <HiRocketLaunch className="w-20 h-20 text-emerald-500" />,
//   },
// ];

// Alternative 7-screen version (for balanced experience)
// export const onboardingContentsMedium: OnboardingScreenTypes[] = [
//   {
//     id: 1,
//     title: "Welcome to LearnQuest",
//     subtitle: "Your Academic Journey Begins!",
//     description:
//       "Embark on an exciting learning adventure where every lesson is a quest to master new knowledge and unlock your potential.",
//     color: "bg-gradient-to-br from-purple-100 to-blue-100",
//     icon: <HiSparkles className="w-20 h-20 text-purple-500" />,
//   },
//   {
//     id: 2,
//     title: "Interactive Learning",
//     subtitle: "Engage with dynamic content!",
//     description:
//       "Experience learning through interactive videos, quizzes, simulations, and hands-on projects that make education fun.",
//     color: "bg-gradient-to-br from-blue-100 to-indigo-100",
//     icon: <HiBookOpen className="w-20 h-20 text-blue-500" />,
//   },
//   {
//     id: 3,
//     title: "Track Your Progress",
//     subtitle: "Level up with every lesson!",
//     description:
//       "Watch your knowledge grow as you complete courses, earn XP, unlock achievements, and climb the leaderboard.",
//     color: "bg-gradient-to-br from-green-100 to-emerald-100",
//     icon: <HiTrophy className="w-20 h-20 text-green-500" />,
//   },
//   {
//     id: 4,
//     title: "Join Study Groups",
//     subtitle: "Learn together, grow together!",
//     description:
//       "Connect with fellow learners, share knowledge, participate in discussions, and compete in friendly academic challenges.",
//     color: "bg-gradient-to-br from-orange-100 to-red-100",
//     icon: <HiUsers className="w-20 h-20 text-orange-500" />,
//   },
//   {
//     id: 5,
//     title: "Smart Analytics",
//     subtitle: "Insights that drive success!",
//     description:
//       "Get detailed analytics on your learning patterns, strengths, and areas for improvement with personalized recommendations.",
//     color: "bg-gradient-to-br from-cyan-100 to-teal-100",
//     icon: <HiChartBar className="w-20 h-20 text-cyan-500" />,
//   },
//   {
//     id: 6,
//     title: "Flexible Schedule",
//     subtitle: "Learn at your own pace!",
//     description:
//       "Set your own study schedule, get reminders, and access content anytime, anywhere with our flexible learning system.",
//     color: "bg-gradient-to-br from-amber-100 to-yellow-100",
//     icon: <HiClock className="w-20 h-20 text-amber-500" />,
//   },
//   {
//     id: 7,
//     title: "Ready to Begin?",
//     subtitle: "Your learning adventure awaits!",
//     description:
//       "Join thousands of learners who have already transformed their education. Start your journey today and unlock your potential!",
//     color: "bg-gradient-to-br from-emerald-100 to-green-100",
//     icon: <HiRocketLaunch className="w-20 h-20 text-emerald-500" />,
//   },
// ];

// export default onboardingContentsMedium;
