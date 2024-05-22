import { cn } from "@ui/lib/utils";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpToLine,
  AtSign,
  Bird,
  Book,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Clipboard,
  Code2,
  Command,
  CornerDownLeft,
  CreditCard,
  DatabaseZap,
  File,
  FileText,
  GiftIcon,
  HelpCircle,
  Image,
  KeyRound,
  Laptop,
  LayoutDashboardIcon,
  LifeBuoy,
  LightbulbIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  MapIcon,
  MedalIcon,
  Menu,
  Mic,
  Moon,
  MoreVertical,
  Paperclip,
  Pizza,
  PlaneIcon,
  Plus,
  Rabbit,
  Radar,
  Settings,
  Settings2,
  Share,
  SquareUser,
  SunMedium,
  Terminal,
  Trash,
  TrendingUp,
  Triangle,
  Turtle,
  Twitter,
  User,
  User2Icon,
  UserX2Icon,
  WalletIcon,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  dashboard: LayoutDashboardIcon,
  logo: Command,
  login: LogIn,
  close: X,
  profile: User2Icon,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  lightbulbIcon: LightbulbIcon,
  billing: CreditCard,
  ellipsis: MoreVertical,
  menu: Menu,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  check: Check,
  medalIcon: MedalIcon,
  mapIcon: MapIcon,
  planeIcon: PlaneIcon,
  giftIcon: GiftIcon,
  arrowUpToLine: ArrowUpToLine,
  walletIcon: WalletIcon,
  radar: Radar,
  clipboard: Clipboard,
  bird: Bird,
  book: Book,
  bot: Bot,
  code2: Code2,
  cornerDownLeft: CornerDownLeft,
  lifeBuoy: LifeBuoy,
  mic: Mic,
  paperclip: Paperclip,
  rabbit: Rabbit,
  settings2: Settings2,
  share: Share,
  squareUser: SquareUser,
  triangle: Triangle,
  terminal: Terminal,
  turtle: Turtle,
  keyRound: KeyRound,
  atSign: AtSign,
  databaseZap: DatabaseZap,
  trendingUp: TrendingUp,
  linkedin: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...props}>
      <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
      <path
        fill="#FFF"
        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
      ></path>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" xmlSpace="preserve" fill="#4285F4" {...props}>
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...props}>
      <path fill="#0063e0" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
      <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
    </svg>
  ),
  instagram: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...props}>
      <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fd5"></stop>
        <stop offset=".328" stopColor="#ff543f"></stop>
        <stop offset=".348" stopColor="#fc5245"></stop>
        <stop offset=".504" stopColor="#e64771"></stop>
        <stop offset=".643" stopColor="#d53e91"></stop>
        <stop offset=".761" stopColor="#cc39a4"></stop>
        <stop offset=".841" stopColor="#c837ab"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4168c9"></stop>
        <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
      <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
    </svg>
  ),
  chartIcon: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-12 fill-primary" {...props}>
      <title>Free Icons</title>
      <g id="Layer_10" data-name="Layer 10">
        <path
          className="cls-1"
          d="M21.55,80.68c.08-4.89.14-9.73.08-14.61l-.11-5.33c-.07-6.26-.16-12.52-.39-18.78-.1-2.78-.27-5.57-.5-8.31-.33-3.52-.62-7.07-.9-10.53-.07-1.08.21-1,.77-.19a10.42,10.42,0,0,1,1.64,4.58A107.94,107.94,0,0,1,23,38.41q.24,5.45.26,10.93c0,4.37.25,8.92.33,13.39.09,4.91.13,9.84.08,14.76,0,3-.06,6,0,9.06.05,4.57.13,9.16.5,13.67.29,3.51.81,6.92,1.4,10.34.14.75.27,1.49.41,2.24.49,2.82.54,3.73,0,4.45a3.13,3.13,0,0,1-.35.48c-.43.36-1-.72-1.54-2.78a104.72,104.72,0,0,1-2.42-19.44c-.23-4.94-.19-9.89-.18-14.82Z"
        />
        <path
          className="cls-1"
          d="M49.41,104.67c4.89.25,9.8.35,14.7.3,1.79,0,3.57-.14,5.36-.17,6.3-.16,12.61-.54,18.87-1.26,2.78-.33,5.56-.77,8.29-1.27,1.75-.35,3.5-.69,5.24-1.1s3.5-.68,5.26-1c1.1-.18,1,.13.22.72A15,15,0,0,1,103,103c-3.58.92-7.22,1.54-10.87,2.12s-7.33.88-11,1.08c-4.43.27-9,.68-13.55.81q-7.45.24-14.93,0c-3.06-.1-6.12-.23-9.18-.42l-13.84-1c-3.57-.25-7.07-.39-10.61-.67-.77-.07-1.54-.1-2.32-.19-2.9-.31-3.8-.63-4.32-1.38a2.82,2.82,0,0,1-.34-.51c-.2-.56,1-.81,3.14-.68,6.27.4,12.85.93,19.5,1.42,4.95.36,9.87.79,14.81,1Z"
        />
        <path
          className="cls-1"
          d="M34.75,75.38c0,2.72,0,5.45,0,8.17l.11,3c.09,3.5.14,7,.49,10.46,0,.36.09.73.16,1.07,0,.12,0,.19.07.28s.07.18.17.19a1.35,1.35,0,0,0,.29,0,4.41,4.41,0,0,0,.53,0c.37,0,.77,0,1.15,0,1-.07,1.94-.22,2.91-.35s2-.2,2.93-.31c.57-.06.62.25.18.72A5.16,5.16,0,0,1,41.27,100c-1,.17-1.94.32-2.93.43-.5,0-1,.09-1.52.1a7.6,7.6,0,0,1-.82,0,3.49,3.49,0,0,1-.66-.11c-.22-.06-.44-.11-.66-.19-.89-.41-1-2-1-2.27-.07-.56-.12-1.11-.16-1.66-.07-1.09-.1-2.17-.11-3.26,0-2.47-.22-5-.28-7.52C33,82.7,33,79.94,33,77.18l.07-5.09c0-1.29.07-2.58.14-3.87,0-.65.07-1.29.14-1.94a8.62,8.62,0,0,1,.15-1.11c.08-.43.22-.9.67-1a3.41,3.41,0,0,1,1,0l.77.06,1.46.13a25.11,25.11,0,0,0,2.87,0c.41,0,.81,0,1.21-.09,1.47-.17,1.76-.28,2.26-.13.11,0,.25,0,.35.06s.18.25,0,.56a2.77,2.77,0,0,1-1.33.88,14.22,14.22,0,0,1-5.64.31l-1.38-.12-.61,0h0s0,0,0,0c-.05.41-.09.86-.12,1.31-.15,2.67-.19,5.44-.19,8.18Z"
        />
        <path
          className="cls-1"
          d="M44.13,80.37l-.1,3.7c0,.45,0,.9,0,1.35,0,1.58-.11,3.17-.13,4.75,0,.71,0,1.41.07,2.11l.1,1.34A7.93,7.93,0,0,1,44,94.93a.28.28,0,0,1-.08.12l-.06,0h0l-.13.05-.06,0c.13,0,.07,0,0,0h-.11a.68.68,0,0,1-.23-.11,2,2,0,0,1-.85-1.17,30,30,0,0,1-.06-5.53c.09-1.11,0-2.25,0-3.39l0-3.73,0-2.3c0-1.16,0-2.32,0-3.48,0-.89-.15-1.77-.22-2.66,0-.2,0-.39-.05-.59,0-.74.12-1,.61-1.11a2,2,0,0,1,.33-.08c.37,0,.67.26.75.78a30,30,0,0,1,.3,4.88l0,3.72Z"
        />
        <path
          className="cls-1"
          d="M56.93,68c0,3.21,0,6.43.09,9.64l.12,3.52c.09,4.13.17,8.27.41,12.38.06.92.13,1.83.24,2.73l.09.66.06.33,0,.18c0,.09,0,.23.14.27a1.12,1.12,0,0,0,.32,0h.73l.84,0,1.72-.18c1.14-.16,2.31-.22,3.44-.35.68-.08.72.23.18.72a6.51,6.51,0,0,1-3,1.4,26,26,0,0,1-3.74.37l-.31,0a3.4,3.4,0,0,1-.45,0,4.21,4.21,0,0,1-.81-.23c-.1-.08-.27-.09-.32-.24a3.7,3.7,0,0,1-.28-.28,2.51,2.51,0,0,1-.31-.79l-.08-.43,0-.25L56,96.87,55.88,96c-.19-2.44-.24-4.84-.25-7.26,0-2.9-.21-5.9-.27-8.85q-.11-4.87-.13-9.74v-6c0-3,0-6.06.16-9.09a13,13,0,0,1,.18-2,1.36,1.36,0,0,1,.21-.54.89.89,0,0,1,.49-.23,5.26,5.26,0,0,1,1.2,0c1.16.11,2.28.22,3.4.25.49,0,1,0,1.45,0A14.79,14.79,0,0,1,65,52.39c.12,0,.27,0,.38,0s.2.26-.07.61a3.06,3.06,0,0,1-1.62.93c-2.24.56-4.5.16-6.52,0A37,37,0,0,0,57,58.24c0,3.22,0,6.47,0,9.72Z"
        />
        <path
          className="cls-1"
          d="M65.74,73.72,65.67,79c0,.64,0,1.28,0,1.92l-.09,6.73c0,1,0,2,.08,3l.11,1.9a14.12,14.12,0,0,1-.09,1.87.48.48,0,0,1-.07.18s0,.07-.29.14l.12,0H65.4l-.1,0a.71.71,0,0,1-.24-.16,3.22,3.22,0,0,1-.85-1.67,61.8,61.8,0,0,1-.1-7.82c.09-1.57,0-3.19,0-4.8V71.65c0-1.64,0-3.29,0-4.92,0-1.27-.17-2.51-.25-3.77,0-.27,0-.55-.06-.83,0-1,.12-1.39.6-1.58.11,0,.22-.1.33-.13.38-.07.67.36.75,1.09a60,60,0,0,1,.37,6.93v5.28Z"
        />
        <path
          className="cls-1"
          d="M79.38,59.1q0,5.84.16,11.67L79.69,75c.12,5,.25,10,.5,15,.11,2.21.3,4.45.58,6.59,0,.25,0,.29.07.4s0,.2.17.2l.2,0h.26l.85,0c.58,0,1.16-.08,1.75-.15,1.17-.11,2.36-.2,3.53-.34.81-.11.83.21.16.73a8.66,8.66,0,0,1-3.63,1.45c-.59.08-1.18.14-1.79.19-.3,0-.62,0-.94,0a6.43,6.43,0,0,1-.77-.05,7.69,7.69,0,0,1-.79-.21c-.1-.08-.23-.12-.29-.24a.7.7,0,0,1-.26-.28,2.43,2.43,0,0,1-.27-.77l-.09-.43,0-.25-.06-.45c-.08-.6-.15-1.18-.19-1.77-.1-1.17-.16-2.34-.22-3.5-.1-2.34-.16-4.67-.18-7,0-3.5-.26-7.13-.35-10.7-.1-3.92-.16-7.85-.2-11.78l0-7.25c0-3.66,0-7.34.17-11,0-.88.07-1.75.14-2.64l.06-.66,0-.34c0-.16.06-.32.09-.48a2.1,2.1,0,0,1,.34-.84.79.79,0,0,1,.77-.27c.92.13,1.29.18,1.83.24s1,.11,1.55.14,1.18.06,1.77.07a17.79,17.79,0,0,0,2.2-.09c.44,0,.65,0,.94-.08a1.79,1.79,0,0,0,.39-.13c.09,0,.16,0,.18.13a.88.88,0,0,1-.18.6,3.11,3.11,0,0,1-2,1.06,14.18,14.18,0,0,1-3.37.15c-.56,0-1.11-.1-1.66-.17s-1.36-.2-1.17-.15c0,0,0,0,0,.06s0,0,0,.08l0,.52c-.07.7-.1,1.44-.14,2.19-.06,1.48-.09,3-.11,4.52,0,3.89,0,7.83,0,11.75Z"
        />
        <path
          className="cls-1"
          d="M88.36,64.82l-.09,7.39,0,2.69c0,3.17-.07,6.34-.11,9.51,0,1.4,0,2.81.07,4.21,0,.89.07,1.79.1,2.69s0,1.82-.09,2.65a.61.61,0,0,1-.08.26l-.07.08,0,0-.17.06s0,0,0,0c.21-.07.08,0,.1,0h0l-.1,0a.89.89,0,0,1-.24-.24,5.47,5.47,0,0,1-.84-2.38c-.17-3.66-.23-7.32-.07-11,.09-2.21,0-4.5,0-6.76V66.45l0-4.58c0-2.32,0-4.64,0-6.94,0-1.78-.17-3.53-.25-5.3,0-.39,0-.77-.06-1.17,0-1.45.12-1.94.6-2.23.12-.06.23-.15.34-.19.37-.11.65.48.74,1.53.29,3.13.35,6.46.37,9.79v7.46Z"
        />
        <path
          className="cls-1"
          d="M33.63,86.13l.1-2.6.15-2.6c0-.63,0-1.26,0-1.89.14-2.24.31-4.47.38-6.71,0-1,0-2-.07-3a10.71,10.71,0,0,1,.12-3.78c.11-.4.58-.38,1.14-.09a4.47,4.47,0,0,1,.91.64,1.67,1.67,0,0,1,.6,1,33.87,33.87,0,0,1,.52,3.85,31.9,31.9,0,0,1-.13,3.9,36,36,0,0,0,.15,4.75c0,1.75.06,3.5,0,5.25l0,3.23c0,1.63-.06,3.27,0,4.89.08,1.25.42,2.48.58,3.72a8.11,8.11,0,0,1,.12.82,1.52,1.52,0,0,1-.32,1.11,1.75,1.75,0,0,1-1,.49,4.34,4.34,0,0,1-.6.14,1.65,1.65,0,0,1-1.64-1,11.41,11.41,0,0,1-.86-3.35c-.15-1.14-.21-2.31-.26-3.48-.06-1.73,0-3.48,0-5.23Z"
        />
        <path
          className="cls-1"
          d="M56,81.05l.08-3.42.14-3.42c0-.83,0-1.66,0-2.49.12-2.94.28-5.87.34-8.81,0-1.3,0-2.6-.06-3.89a21.76,21.76,0,0,1,.09-5c.09-.52.5-.48,1-.07a4.06,4.06,0,0,1,.81.87A2.54,2.54,0,0,1,59,56.13c.2,1.69.4,3.38.47,5.08s0,3.4-.12,5.11c-.15,2.05.09,4.17.12,6.26,0,2.29,0,4.59,0,6.89l-.05,4.24c0,2.15,0,4.3.05,6.42.07,1.65.37,3.27.52,4.9,0,.36.1.71.11,1.08a2.53,2.53,0,0,1-.28,1.44,1.48,1.48,0,0,1-.83.64,4.25,4.25,0,0,1-.53.19c-.58.13-1.1-.42-1.45-1.38a36.15,36.15,0,0,1-1-9c-.05-2.29,0-4.59,0-6.89Z"
        />
        <path
          className="cls-1"
          d="M78.45,75.22l.09-4.47.15-4.48c0-1.08,0-2.17,0-3.26.13-3.83.29-7.66.36-11.5,0-1.7,0-3.4,0-5.09a38,38,0,0,1,.09-6.49c.09-.67.5-.62,1-.07A5.63,5.63,0,0,1,80.91,41a4.1,4.1,0,0,1,.53,1.68c.2,2.21.4,4.42.46,6.64s0,4.44-.13,6.68c-.15,2.67.08,5.44.11,8.18,0,3,0,6,0,9l-.05,5.54c0,2.8-.06,5.61,0,8.39.07,2.16.37,4.27.52,6.4,0,.47.09.93.11,1.41,0,1.76-.35,2.33-1.11,2.71a3.59,3.59,0,0,1-.53.25c-.58.17-1.1-.55-1.45-1.82a61.48,61.48,0,0,1-1-11.85c0-3,0-6,0-9Z"
        />
        <path
          className="cls-1"
          d="M113.37,98.22a.59.59,0,0,0,.16-.08l.1-.08c.05,0,.05,0,0-.06l-.16-.08-.12-.06s-.32-.11-.49-.17c-.61-.19-1.23-.34-1.83-.56-2.1-.77-4.14-1.67-6.17-2.59l-2.73-1.18a9,9,0,0,1-3.3-2.1c-.3-.35.06-.53.56-.62a3.06,3.06,0,0,1,1.75.11c2.21.93,4.5,2,6.8,3.07a36.68,36.68,0,0,0,4.38,1.55l.9.28.45.14.25.07.39.1c.53.11,1,.26,1.55.35l1.59.27,0,.27-.3.42c-.21.28-.4.52-.6.77s-.49.59-.76.87l-.87.82c-.5.44-.86.72-1.3,1.08-1.29,1-2.62,1.94-3.87,2.93-1,.76-1.86,1.62-2.77,2.43-.2.18-.39.38-.59.55-.78.64-1.12.72-1.65.4a3.28,3.28,0,0,1-.37-.22c-.35-.29-.26-.84.24-1.42a32.47,32.47,0,0,1,5.13-4.56l2.06-1.52,1-.77.48-.39c.09-.06.05,0,.08,0Z"
        />
        <path
          className="cls-1"
          d="M72.14,35A81.06,81.06,0,0,1,62,39.5c-1.27.44-2.51,1-3.78,1.38A102.21,102.21,0,0,1,44.49,44l-3.1.45c-1,.14-2.07.23-3.1.33-1.32.11-2.65.19-4,.2a18.71,18.71,0,0,1-4-.32c-.84-.2-.66-.32.05-.42.35,0,.84-.13,1.44-.24s1.27-.17,2-.22c1.32-.05,2.64-.26,4-.4l2-.29c.66-.08,1.32-.16,2-.28,2.63-.4,5.26-.91,7.88-1.47A68.88,68.88,0,0,0,59,38.42c1.67-.68,3.39-1.25,5-2.05s3.33-1.42,4.9-2.32l3-1.56c1-.49,1.9-1.15,2.85-1.72a73.78,73.78,0,0,0,8.24-5.84c1-.88,1.9-1.77,2.81-2.67l1.38-1.34c.46-.45.86-1,1.29-1.43s.73-.85,1.12-1.26c1.44-1.54,2-1.89,2.88-1.76a4.32,4.32,0,0,1,.56.1c.55.21.27,1.14-.71,2.4a39.79,39.79,0,0,1-4.85,5.42c-.91.83-1.84,1.66-2.77,2.49s-2,1.51-3,2.27L79.39,30.8c-.76.54-1.59,1-2.38,1.49-1.6,1-3.15,2-4.84,2.81Z"
        />
        <path
          className="cls-1"
          d="M96.44,12.56l0-.14,0-.08c0-.05,0-.11,0-.18s-.08,0-.13,0a1.44,1.44,0,0,0-.29.11c-.48.27-1,.57-1.46.81A20.77,20.77,0,0,1,89,14.8c-.86.14-1.72.29-2.57.39a11.4,11.4,0,0,1-3.3.07c-.34,0-.29-.36,0-.7a2.31,2.31,0,0,1,1.38-.8c2.12-.29,4.17-.65,6.26-1.08a14.74,14.74,0,0,0,3.6-1.49l.74-.4,1.09-.62c.4-.22.78-.44,1.16-.63A11.33,11.33,0,0,1,98.44,9l-.13,1.79-.13,2-.11,1.39a26.59,26.59,0,0,1-.72,4.22,18.25,18.25,0,0,1-1,3.19,5.79,5.79,0,0,1-.31.67c-.46.81-.78.95-1.28.82-.11,0-.23-.06-.34-.11-.35-.17-.4-.65-.14-1.19a22.76,22.76,0,0,0,1.68-5.18c.12-.69.24-1.39.31-2.11,0-.35.07-.72.1-1.08l.06-.87Z"
        />
      </g>
    </svg>
  ),
  magnifierIcon: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-12 fill-primary" {...props}>
      <title>Free Icons</title>
      <g id="Layer_46" data-name="Layer 46">
        <path
          className="cls-1"
          d="M60.58,28c1.89.06,3.8.09,5.7.09l2.08,0q3.66,0,7.34-.13c1.08,0,2.17-.11,3.25-.18,1.38-.05,2.76-.21,4.16-.14.43,0,.38,0,0,.16a8.62,8.62,0,0,1-1.81.48,68.81,68.81,0,0,1-8.5.56c-1.71,0-3.49.11-5.24.14-1.92,0-3.84,0-5.77,0l-3.55-.08c-1.79,0-3.59-.13-5.36-.22-1.39-.06-2.74-.08-4.11-.17l-.91-.05c-1.12-.14-1.46-.29-1.67-.57a1.77,1.77,0,0,1-.14-.16c-.09-.11.4-.32,1.22-.31,2.43.07,5,.27,7.54.39,1.91.09,3.83.17,5.74.2Z"
        />
        <path
          className="cls-1"
          d="M58.21,28.25,55.88,28,55,28c-1-.11-2-.21-3-.35l-1.32-.13A7.5,7.5,0,0,1,49,27.23c-.19-.06-.1-.18.08-.29a1.25,1.25,0,0,1,.76-.22,26.71,26.71,0,0,1,3.44.27c.69.11,1.41.12,2.12.18l2.33.19,1.44.12c.73,0,1.46.1,2.18.12.56,0,1.12,0,1.67,0h.37c.45,0,.59.07.69.29a.94.94,0,0,1,.06.15c0,.17-.15.31-.49.36a14.62,14.62,0,0,1-3.11.07c-.78,0-1.56-.09-2.34-.15Z"
        />
        <path
          className="cls-1"
          d="M55.41,88.66A15.53,15.53,0,0,0,61.2,95.9a18,18,0,0,0,3,1.69,17.28,17.28,0,0,0,12,1,17.58,17.58,0,0,0,5-2.22,23.83,23.83,0,0,0,5.14-4.73c.47-.55.77-.25.71.5a4.94,4.94,0,0,1-1.58,3,19.84,19.84,0,0,1-14.14,5.57,23.55,23.55,0,0,1-4.69-.61,20.07,20.07,0,0,1-4.42-1.72,18.08,18.08,0,0,1-7.41-7.12A16.32,16.32,0,0,1,53,85.22a18.1,18.1,0,0,1,1.46-9.39,20,20,0,0,1,4.09-6.07,15.5,15.5,0,0,1,1.19-1.1c1.59-1.28,2.26-1.45,2.83-1.31a1.7,1.7,0,0,1,.38.12c.33.22-.26.79-1.33,1.65a18.94,18.94,0,0,0-6.7,10.28,15.76,15.76,0,0,0,.57,9.24Z"
        />
        <path
          className="cls-1"
          d="M51.72,117.14c1.84.13,3.69.22,5.53.28l2,0q3.56.14,7.13.18c1.06,0,2.12,0,3.16-.06a28.81,28.81,0,0,1,4,0c.42.07.37.3,0,.59a3,3,0,0,1-1.77.68,71.46,71.46,0,0,1-8.28,0c-1.66-.09-3.39,0-5.09,0-1.86,0-3.73-.1-5.6-.17l-3.45-.19c-1.74-.1-3.49-.25-5.22-.41-1.35-.12-2.68-.2-4-.42a5.74,5.74,0,0,1-.9-.18,2.54,2.54,0,0,1-1.15-.49.74.74,0,0,1-.31-.62,1.55,1.55,0,0,1,0-.31c.09-.31.61-.38,1.26-.19,2.16.42,4.62.65,7.08.88,1.83.15,3.69.3,5.54.39Z"
        />
        <path className="cls-1" d="M23.72,104.17c-.23-.08-10,3-12.25,6.71s19,8,35,6.48L24,109.76Z" />
        <path className="cls-1" d="M61.21,36.17c-4.82,1.74-12.35-1.35-14.67-2.75s-4.65-7.22-4.65-7.22l8.26.44S53.39,35.06,61.21,36.17Z" />
        <path
          className="cls-1"
          d="M54.26,52.54A60.85,60.85,0,0,0,40.31,66.29a92.51,92.51,0,0,0-5.57,8.21,82.37,82.37,0,0,0-4.54,8.81,67.35,67.35,0,0,0-4.29,13.74c-.21,1-.35,2.09-.53,3.13s-.23,2.1-.35,3.15l-.17,3.16,0,1.59a4.59,4.59,0,0,0,0,.85L27.22,110c1,.47,2,.76,3,1.15,2,.8,4,1.3,6.08,1.94a126.74,126.74,0,0,0,25.38,3.83,143.43,143.43,0,0,0,22.81-.59,138.46,138.46,0,0,0,28.41-6.16c2.89-.89,2.67-.41.4.9-.57.33-1.27.71-2.08,1.13a20.66,20.66,0,0,1-2.77,1.27q-1.57.6-3.42,1.23c-.61.2-1.24.42-1.9.61l-2,.49a133.29,133.29,0,0,1-30,3.6,140.45,140.45,0,0,1-30.14-3l-4.45-1.08c-1.49-.38-3-.86-4.45-1.29s-2.93-1-4.41-1.55c-.74-.24-1.44-.61-2.17-.92l-2.72-1.23a4.91,4.91,0,0,1-.05-1l0-.87,0-1.18c0-.79,0-1.58.05-2.37,0-1.58.22-3.14.36-4.71A66.71,66.71,0,0,1,25,91.06a77,77,0,0,1,8.39-18.72,87.13,87.13,0,0,1,5.83-8.43A70.89,70.89,0,0,1,46,56.24a48.83,48.83,0,0,1,10.09-7.68,38.07,38.07,0,0,1,5.8-2.67,31.16,31.16,0,0,1,6.25-1.45,27.84,27.84,0,0,1,9.67.53,31.8,31.8,0,0,1,9,3.64,50.62,50.62,0,0,1,14,12.94,84.72,84.72,0,0,1,7.82,12.35,94.47,94.47,0,0,1,5.74,13.36c.68,2,1.33,4,1.84,6.14a41.26,41.26,0,0,1,1.38,8.43,8.82,8.82,0,0,1-.48,3.84,7.34,7.34,0,0,1-.48,1.12c-.59.72-.73-2.44-1.83-8A93.23,93.23,0,0,0,106,74.49a79.27,79.27,0,0,0-7-11.19,52.82,52.82,0,0,0-9.08-9.51c-5-4.06-11.12-6.87-17.5-7.06s-12.69,2.13-18,5.85Z"
        />
        <path
          className="cls-1"
          d="M88.87,83c-.27,21-34.27,22.53-35.3,1.17A18.87,18.87,0,0,1,66.38,65.86C77.86,62.18,88.23,71.8,88.87,83c.07,1.28,2.07,1.29,2,0C90.2,71.23,80.23,61.16,68,63.42c-9.55,1.75-16.79,11.11-16.39,20.77,1,24,39,22.4,39.3-1.17A1,1,0,0,0,88.87,83Z"
        />
        <path
          className="cls-1"
          d="M73.13,81.46c-.57.86-1.15,1.75-1.76,2.57-.22.3-.38.65-.6,1l-2.35,3.28c-.35.49-.61,1-.91,1.55a11.29,11.29,0,0,1-.57,1,4,4,0,0,1-.84.87c-.22.16-.46-.07-.67-.44a2.08,2.08,0,0,1-.34-1.36,13.57,13.57,0,0,1,2.33-4c.6-.74,1-1.64,1.57-2.45s1.26-1.75,1.93-2.57l1.22-1.55c.61-.78,1.24-1.56,1.8-2.36.44-.62.8-1.29,1.23-1.91.1-.14.18-.28.29-.42a1.12,1.12,0,0,1,.53-.44.66.66,0,0,1,.46,0,.85.85,0,0,1,.19.06c.18.09.17.4.06.86a36.13,36.13,0,0,1-1.9,3.71c-.53.91-1.09,1.8-1.63,2.71Z"
        />
        <path className="cls-1" d="M72.51,45V41.46a1.38,1.38,0,0,0-2.75,0V45a1.38,1.38,0,0,0,2.75,0Z" />
        <path
          className="cls-1"
          d="M78.21,38.25c-3.61.17-7.21.1-10.79,0-1.3,0-2.61,0-3.91-.08C59,38,54.16,37.77,49.7,36a17,17,0,0,1-2.84-1.47,13.76,13.76,0,0,1-2.45-2A15.52,15.52,0,0,1,42,29.22c-.65-1.17-1.09-2.42-1.68-3.49-.38-.61-.22-.74.46-.36a11.33,11.33,0,0,1,2.47,2.57c2.73,4.34,7,6.7,12.17,7.61a59.49,59.49,0,0,0,9.63.63c3.59.1,7.17.2,10.74.11,2.19,0,4.39-.15,6.57-.35a38.47,38.47,0,0,0,9.71-1.74,8.24,8.24,0,0,0,3.09-1.84,20.32,20.32,0,0,0,2.35-2.82l1-1.37C99.74,26.47,100.36,26,101,26a2.09,2.09,0,0,1,.44,0c.4.13,0,.9-.81,2.14a27.7,27.7,0,0,1-4.39,5.76,9.48,9.48,0,0,1-1.64,1.2c-.3.18-.62.32-.93.48s-.59.25-.89.35A25.44,25.44,0,0,1,89.13,37a52.14,52.14,0,0,1-5.46.81c-1.8.2-3.63.36-5.45.46Z"
        />
        <path
          className="cls-1"
          d="M61.61,26.1q4.2.22,8.4.27c1,0,2-.05,3.06,0,3.61,0,7.21-.08,10.81-.25,1.6-.09,3.2-.25,4.77-.46,1-.07,2-.25,3-.36.5-.06,1-.12,1.51-.2s1-.07,1.53-.11.58,0,.09.31l-1,.61a6.6,6.6,0,0,1-1.54.57c-1,.22-2.06.49-3.1.67s-2.09.3-3.14.4c-2.1.2-4.21.35-6.33.36-2.53,0-5.15.2-7.74.23-2.84,0-5.69,0-8.53-.08l-5.24-.22c-2.65-.13-5.3-.33-7.93-.54-2-.15-4.06-.24-6.09-.47-.45-.06-.89-.09-1.34-.16l-.58-.1-.47-.16a5.7,5.7,0,0,1-.68-.31,2.09,2.09,0,0,1-.41-.32,2,2,0,0,1-.22-.4c-.05-.13-.13-.24-.15-.32-.09-.24.71-.6,1.88-.48,3.5.33,7.22.72,11,1,1.4.11,2.8.21,4.21.29s2.82.15,4.23.21Z"
        />
        <path className="cls-1" d="M73.91,82.23a2.62,2.62,0,1,1-4.3-2A2.64,2.64,0,0,1,73.91,82.23Z" />
        <path
          className="cls-1"
          d="M67.82,15.63c.15,0,0,.19-.2.51a1.45,1.45,0,0,1-.42.35,1.35,1.35,0,0,1-.34,0,5.47,5.47,0,0,1-.82-.62,1.87,1.87,0,0,1-.42-.56c-.21-.41-.42-.82-.58-1.22a.93.93,0,0,1-.05-.29,2,2,0,0,0-.22-.93c0-.05,0-.11-.11-.13a2.2,2.2,0,0,1-.38-.94c0-.28,0-.55,0-.83,0,0,0-.06,0-.12a.26.26,0,0,0,.09-.28,1.45,1.45,0,0,1,0-.36.76.76,0,0,1,.12-.24.65.65,0,0,1,.3-.15c.09,0,.17-.07.26-.12l.1,0a3.43,3.43,0,0,1,.86.49s.52.94.56,1,0,.12,0,.19.36.74.36.77.13.29,0,.49c0,0,0,.06,0,.09a4.25,4.25,0,0,1,.17.77,1.49,1.49,0,0,0,.14.37s0,0,0,.08,0,.07,0,.09a2.83,2.83,0,0,0,.39.8c0,.05.06.42.12.46S67.76,15.62,67.82,15.63Z"
        />
        <path
          className="cls-1"
          d="M79.73,20.75c0,.15-.21.08-.56-.16a2.05,2.05,0,0,1-.42-.41c0-.11-.1-.22-.13-.3s.13-.53.15-.71a1.16,1.16,0,0,1,.19-.44c.17-.27.33-.57.5-.86a.43.43,0,0,1,.16-.17,1.33,1.33,0,0,0,.5-.63c0-.05,0-.08,0-.15s.34-.76.44-.81.44-.31.67-.45c0,0,0-.07.12-.05s.21,0,.27-.08a.73.73,0,0,1,.29-.19.9.9,0,0,1,.27,0,.87.87,0,0,1,.28.25c0,.09.15.15.24.23l.09.08a3,3,0,0,1,0,.78l-.17.37a3.3,3.3,0,0,0-.18.45c0,.05-.07.06-.12.09s-.23.64-.25.66-.1.26-.31.29c0,0,0,0-.06.06a2.22,2.22,0,0,1-.44.58,2.69,2.69,0,0,0-.19.32l-.07,0s-.06,0-.07.06a5.92,5.92,0,0,0-.51.76c0,.07-.39.24-.43.32S79.73,20.69,79.73,20.75Z"
        />
      </g>
    </svg>
  ),
  funkyLightbulbIcon: ({ className, ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={cn("w-12 fill-primary", className)} {...props}>
      <g id="Layer_49" data-name="Layer 49">
        <path
          className="cls-1"
          d="M62,109a23.62,23.62,0,0,1-5.73-.76,13.32,13.32,0,0,1-2.07-.71A9.7,9.7,0,0,1,51,105.18a9.6,9.6,0,0,1-1.13-1.6,5.1,5.1,0,0,1-.63-2,4.81,4.81,0,0,1,.13-1.85,5.67,5.67,0,0,1,.8-1.66,4.54,4.54,0,0,1,3.94-1.88c.46,0,.39.26.1.62a10.79,10.79,0,0,1-1.2,1.32,5.51,5.51,0,0,0-1,1.12,2.9,2.9,0,0,0-.51,1.22,2.83,2.83,0,0,0-.05,1.33,4.84,4.84,0,0,0,.64,1.48,5.59,5.59,0,0,0,1.51,1.56,11,11,0,0,0,2,1,16.87,16.87,0,0,0,5.12,1,28.47,28.47,0,0,0,3.33,0,21.14,21.14,0,0,0,5-.8,16.56,16.56,0,0,0,3.48-1.48c.25-.13.47-.28.71-.42.89-.52,1.22-.62,1.62-.47a2.14,2.14,0,0,1,.27.09c.22.11.06.62-.56,1.2a14.07,14.07,0,0,1-3.13,2.2,16,16,0,0,1-1.79.8c-.63.2-1.27.36-1.91.5a27.47,27.47,0,0,1-5.77.52Z"
        ></path>
        <path
          className="cls-1"
          d="M67.12,109.72a30,30,0,0,1-3.11.63l-1.15.15a19.19,19.19,0,0,1-4.08-.12c-.6-.08-1.2-.18-1.79-.31a5.83,5.83,0,0,1-2.17-.87c-.2-.15,0-.33.25-.44a1.56,1.56,0,0,1,1,0,16.18,16.18,0,0,0,4.28.85,12.74,12.74,0,0,0,2.75-.16,24.16,24.16,0,0,0,3-.57c.61-.15,1.21-.35,1.81-.54l1.36-.48,1.31-.56c.67-.33,1.28-.72,1.93-1.07L73,106c.53-.29.74-.31,1-.22l.14.06c.12.08,0,.31-.38.62a13.85,13.85,0,0,1-3.55,2.23,18.67,18.67,0,0,1-3,1.1Z"
        ></path>
        <path
          className="cls-1"
          d="M69.12,116.17a4.5,4.5,0,0,0,.86-1.08c.1-.15.13-.34.22-.49a18,18,0,0,0,.87-1.82c.13-.27.23-.57.34-.86a2,2,0,0,1,.66-1.1c.12-.1.25.09.38.32s.27.44.23.63a7.41,7.41,0,0,1-.71,2.15c-.25.42-.35.93-.57,1.4a8.7,8.7,0,0,1-.88,1.49,5.23,5.23,0,0,1-.78.78l-.32.27-.38.2a3.72,3.72,0,0,1-.77.33,3.42,3.42,0,0,1-.61.22,4.64,4.64,0,0,1-.64.17,1.31,1.31,0,0,1-.28,0c-.35,0-.45-.15-.48-.5,0-.08,0-.15,0-.22a.72.72,0,0,1,.36-.58c.63-.31,1.09-.41,1.54-.63a3.77,3.77,0,0,0,.94-.7Z"
        ></path>
        <path
          className="cls-1"
          d="M53.37,98.52a3.31,3.31,0,0,0-.81.42c-.09.07-.14.17-.24.25a4.46,4.46,0,0,0-.91.93,1,1,0,0,0-.13.52c0,.23.08.36-.1.54a2.13,2.13,0,0,1-.88.29c-.41.07-1-.13-1-.41a2.07,2.07,0,0,1,.13-1.28,2.6,2.6,0,0,1,.65-.93c.33-.3.48-.7.77-1A5.77,5.77,0,0,1,51.93,97a5.23,5.23,0,0,1,.79-.38c.2-.09.44-.13.65-.2s.46-.07.69-.09.37-.05.56-.05a2.84,2.84,0,0,1,.58.05.4.4,0,0,1,.23.1c.25.19.26.37.08.73a1.71,1.71,0,0,1-.13.23,1.54,1.54,0,0,1-.56.53c-.56.31-.59.4-.82.46a2.36,2.36,0,0,0-.6.22Z"
        ></path>
        <path
          className="cls-1"
          d="M36.22,81.71a49.21,49.21,0,0,1-6.29-9c-.33-.59-.62-1.2-.9-1.81a17.8,17.8,0,0,1-.8-1.85,31.33,31.33,0,0,1-2.14-13.93c.06-1,.23-2.09.36-3.13s.35-2.06.64-3.06a20.29,20.29,0,0,1,3.16-7.33c.49-.68.53-.51.29.16S29.88,43.6,29.33,45c-.25.61-.46,1.23-.65,1.86s-.33,1.28-.52,1.92a18,18,0,0,0-.45,1.93c-.12.65-.29,1.29-.36,2a31.09,31.09,0,0,0-.19,8A28.89,28.89,0,0,0,29.84,70a44.29,44.29,0,0,0,5.7,9.21,58.71,58.71,0,0,0,4.43,5,99.8,99.8,0,0,0,7.48,6.92c2,1.7,4,3.27,6.07,4.91.44.37.89.71,1.32,1.1,1.62,1.42,2,2,2.21,2.47a2.21,2.21,0,0,1,.12.32c0,.25-.7-.25-1.91-1.23-3.6-2.88-7.51-5.87-11.22-9.15a82.77,82.77,0,0,1-7.84-7.83Z"
        ></path>
        <path
          className="cls-1"
          d="M31.45,39.67a31.31,31.31,0,0,1,5.45-5.58,36.26,36.26,0,0,1,6.63-4A33.3,33.3,0,0,1,64.1,27.69c.91.18,1.83.4,2.73.67s1.79.64,2.68,1a22.87,22.87,0,0,1,8,5.93,27.22,27.22,0,0,1,5,8.49A39.66,39.66,0,0,1,84.41,63a59.78,59.78,0,0,1-1.69,8.4A77.05,77.05,0,0,1,80,79.42a80,80,0,0,1-4.59,9.85,79.92,79.92,0,0,1-5.8,9.16c-1.33,1.82-1.39,1.39-.64-.38.38-.88.93-2.12,1.62-3.59s1.5-3.18,2.45-5c1.69-3.21,3.14-6.53,4.52-9.86A76.26,76.26,0,0,0,81,69.37a44.2,44.2,0,0,0,.63-21.22,30.27,30.27,0,0,0-2.18-6.06,23.37,23.37,0,0,0-3.62-5.34,19.76,19.76,0,0,0-5-4.06,23.39,23.39,0,0,0-6-2.34,31.52,31.52,0,0,0-27.15,6.22A24.28,24.28,0,0,0,32,43.27c-.33.66-.68,1.31-1,2l-.76,2.07a34.32,34.32,0,0,0-1,4.36l-.14.83-.07.85-.13,1.69v2.54l.08.84a29.74,29.74,0,0,0,1.3,6.66,37.55,37.55,0,0,0,2.63,6.28,52.37,52.37,0,0,0,3.63,5.78c4.18,5.72,9.32,10.48,14.6,15.14,1.16,1,2.32,2,3.48,3.08,4.32,3.91,5.49,5.63,5.71,7a3.87,3.87,0,0,1,.08.89c0,.16-.12.15-.29,0s-.36-.41-.73-.77c-.69-.71-1.83-1.83-3.41-3.22-4.74-4.07-9.84-8.2-14.5-13A58.44,58.44,0,0,1,29.61,69.75a37.92,37.92,0,0,1-2.42-7.4,32,32,0,0,1-.62-7.82,33.6,33.6,0,0,1,1.3-7.73,25.94,25.94,0,0,1,3.52-7.16Z"
        ></path>
        <path
          className="cls-1"
          d="M57.3,107.39a23.41,23.41,0,0,0,7.92,0c1-.17,1.94-.44,2.87-.64a19,19,0,0,0,4.64-2,12.83,12.83,0,0,0,3.76-3.28,3.43,3.43,0,0,0,.28-3.76,6,6,0,0,0-2-1.84,15.3,15.3,0,0,0-2.61-1.25c-.57-.19-.49-.38.1-.54a4.65,4.65,0,0,1,2.94.22,7.54,7.54,0,0,1,2.9,2.11,5.67,5.67,0,0,1,.94,1.79,4.41,4.41,0,0,1,.07,2.08,7.14,7.14,0,0,1-1.73,3.32,11.69,11.69,0,0,1-2.6,2.19,31.12,31.12,0,0,1-3.48,2,19.59,19.59,0,0,1-1.88.79c-.31.12-.66.21-1,.31l-1,.21a29,29,0,0,1-8.63.71,19.64,19.64,0,0,1-5.27-1.19A12.61,12.61,0,0,1,50,106.36a7.81,7.81,0,0,1-2.32-3.53,5.91,5.91,0,0,1,0-3.41,6.7,6.7,0,0,1,1.94-2.78,9,9,0,0,1,1.18-.87,4.55,4.55,0,0,1,1.79-.65,1.23,1.23,0,0,1,.94.27,1.34,1.34,0,0,1,.31.26c.24.32-.32.79-1.25,1.38a6,6,0,0,0-2.85,3.28,3.6,3.6,0,0,0,0,1.9,5.63,5.63,0,0,0,1,1.88,11,11,0,0,0,6.51,3.25Z"
        ></path>
        <path
          className="cls-1"
          d="M54.63,102.66a17.26,17.26,0,0,0,4.6,1.17c.59.07,1.18.06,1.77.08a21.85,21.85,0,0,0,6.29-.58,13.07,13.07,0,0,0,2.62-1,11.85,11.85,0,0,0,2.77-2c.26-.24.45-.1.49.33a2.16,2.16,0,0,1-.72,1.75,13,13,0,0,1-7.37,3,37.89,37.89,0,0,1-4.79.34,18.87,18.87,0,0,1-5.25-.83,12.92,12.92,0,0,1-3-1.4,8.26,8.26,0,0,1-1.92-1.72,7.11,7.11,0,0,1-.71-1.1A2.85,2.85,0,0,1,49,99.23a3.87,3.87,0,0,1,.69-2.06,5.75,5.75,0,0,1,1.44-1.47,4.81,4.81,0,0,1,.78-.48c1.07-.48,1.56-.29,1.8.13a1.34,1.34,0,0,1,.15.29c.08.32-.27.62-.78.9a5,5,0,0,0-1.93,1.79,1.7,1.7,0,0,0-.27.91.8.8,0,0,0,.09.3c0,.11.2.35.29.53a7.08,7.08,0,0,0,3.37,2.54Z"
        ></path>
        <path
          className="cls-1"
          d="M60.39,111.81a13.18,13.18,0,0,0,4.18.23,13.75,13.75,0,0,0,1.56-.27,22.55,22.55,0,0,0,5.42-1.64,12.09,12.09,0,0,0,2.16-1.29,18.65,18.65,0,0,0,2.3-2.12c.24-.22.45-.09.56.33a1.92,1.92,0,0,1,0,.81,2.68,2.68,0,0,1-.44.9,13.29,13.29,0,0,1-6,3.88,38.18,38.18,0,0,1-4.19,1.22,17.44,17.44,0,0,1-4.84.23,13.45,13.45,0,0,1-3-.68A11.5,11.5,0,0,1,54.26,111,10.73,10.73,0,0,1,52,108.27c-.12-.24-.24-.47-.34-.71-.29-1-.12-1.31.28-1.6a2.14,2.14,0,0,1,.26-.19c.28-.15.7.14,1.07.65.54.76,1,1.48,1.55,2.14a8.56,8.56,0,0,0,1.89,1.71,10.4,10.4,0,0,0,3.67,1.49Z"
        ></path>
        <path
          className="cls-1"
          d="M71.89,116a8.26,8.26,0,0,1-2,2.11,4.18,4.18,0,0,1-1,.57,3.78,3.78,0,0,1-2,.23,5.32,5.32,0,0,1-1.76-.61c-.46-.25-.91-.5-1.34-.78-.27-.18-.55-.36-.8-.56a3.51,3.51,0,0,1-.61-.77c-.11-.18.08-.33.39-.42a1.71,1.71,0,0,1,1,0,14.14,14.14,0,0,0,2.91,1.62,2.06,2.06,0,0,0,1.75-.26,5.27,5.27,0,0,0,1.63-1.54,12.8,12.8,0,0,0,.81-1.29c.37-.69.75-1.4,1.07-2.14.25-.57.42-1.18.69-1.77.06-.13.11-.26.18-.39.29-.45.53-.5.95-.33.09,0,.18.06.25.1a.82.82,0,0,1,.34.86,13.34,13.34,0,0,1-1.19,3.06c-.39.76-.82,1.55-1.32,2.34Z"
        ></path>
        <path
          className="cls-1"
          d="M54.88,50.43a11.27,11.27,0,0,1,0-1.54l.06-.81L55,47.5c.06-.22.14-.42.2-.63a2.28,2.28,0,0,1,1.7-1.54,2.59,2.59,0,0,1,2.21.68,4.89,4.89,0,0,1,.44.47,2.59,2.59,0,0,1,.32.44,6.82,6.82,0,0,1,.41.74,10.84,10.84,0,0,1,.58,1.44,15.9,15.9,0,0,1,.69,3,20.62,20.62,0,0,1-1.84,11.56,14.49,14.49,0,0,1-1.11,1.9,10.25,10.25,0,0,1-.73.93,8.06,8.06,0,0,1-.93.81,5.94,5.94,0,0,1-4.7.9,11.15,11.15,0,0,1-3.64-1.53,15.38,15.38,0,0,1-2.95-2.44A14,14,0,0,1,43.48,61a13.19,13.19,0,0,1-1.3-3.61,6.59,6.59,0,0,1,.34-4,4.84,4.84,0,0,1,1.3-1.71A3.3,3.3,0,0,1,46,51a5.56,5.56,0,0,1,3.61,1.84,16,16,0,0,1,2.33,3c2.33,3.73,3.64,7.92,4.87,11.94a61,61,0,0,1,2,8A30,30,0,0,1,59,83.93c-.2,1.71-.46,1.44-.72,0L57.73,81c-.26-1.19-.53-2.57-.78-4.06a61.71,61.71,0,0,0-2-7.86c-.79-2.64-1.57-5.26-2.53-7.76a22.33,22.33,0,0,0-3.8-6.84,7.79,7.79,0,0,0-1.32-1.22,2.66,2.66,0,0,0-1.36-.49,1.49,1.49,0,0,0-1.12.48,3.31,3.31,0,0,0-.8,1.34,6.73,6.73,0,0,0,.5,4.3,13,13,0,0,0,2.53,4,13.34,13.34,0,0,0,3.89,2.76,5.33,5.33,0,0,0,4.21.33,4.41,4.41,0,0,0,1.74-1.46,14.17,14.17,0,0,0,1.28-2.29,18.2,18.2,0,0,0,1.36-5.16,18,18,0,0,0-.15-5.34,15,15,0,0,0-.74-2.53,7.69,7.69,0,0,0-.57-1.11,1.15,1.15,0,0,0-.47-.5.46.46,0,0,0-.64.26,1.3,1.3,0,0,0-.11.37,4,4,0,0,0-.11.75A14.08,14.08,0,0,0,57,52.26a16.47,16.47,0,0,0,.93,3.19A5.91,5.91,0,0,0,59.63,58a2.81,2.81,0,0,0,2,.41,4.5,4.5,0,0,0,2-1,8.69,8.69,0,0,0,2.66-4,5.47,5.47,0,0,0,.14-2.32,3.32,3.32,0,0,0-.85-1.92,1,1,0,0,0-1.45.09,5.81,5.81,0,0,0-1.23,2A9.82,9.82,0,0,0,62.4,53,17.79,17.79,0,0,0,62,55a31.91,31.91,0,0,0-.34,3.9,39.91,39.91,0,0,0,.59,7.8c.21,1.13.45,2.23.74,3.35.51,2.09,1,3.43,1.2,4.4a5.33,5.33,0,0,1,.22,2.1,5.43,5.43,0,0,1-.1.72c-.16.55-1.4-.9-2.51-4a40,40,0,0,1-2.19-14.83,36.34,36.34,0,0,1,.4-3.86c.12-.64.2-1.3.35-1.94l.21-1c.1-.37.21-.7.33-1a10,10,0,0,1,1-2,4.22,4.22,0,0,1,2.29-1.84,2.83,2.83,0,0,1,1.84.12,3.2,3.2,0,0,1,1.38,1,5.2,5.2,0,0,1,1.13,2.4,7.88,7.88,0,0,1-.05,3.48,10.15,10.15,0,0,1-1.4,3,10.67,10.67,0,0,1-2.22,2.39,6.26,6.26,0,0,1-3.31,1.36,5.35,5.35,0,0,1-1,0c-.33-.05-.64-.15-1-.23s-.58-.26-.86-.4a4.66,4.66,0,0,1-.83-.64,8.68,8.68,0,0,1-1.73-2.83,20,20,0,0,1-1.37-5.87Z"
        ></path>
        <path
          className="cls-1"
          d="M94.5,52.85c0,.17-.26.1-.62-.11a1.5,1.5,0,0,1-.39-.42,1.71,1.71,0,0,1,0-.38,11.77,11.77,0,0,1,.62-1,2.41,2.41,0,0,1,.56-.63,11.71,11.71,0,0,1,1.36-1,1.14,1.14,0,0,1,.36-.15,4.31,4.31,0,0,0,1.2-.53c.07,0,.14-.06.18-.16a3.35,3.35,0,0,1,1.36-.6,9.8,9.8,0,0,1,1.22,0c.06,0,.11,0,.18,0a.33.33,0,0,0,.37.13,1.73,1.73,0,0,1,.5.07,1,1,0,0,1,.25.22.66.66,0,0,1,0,.41c-.06.1,0,.23,0,.36a.57.57,0,0,1,0,.13,6.13,6.13,0,0,1-.8.71s-.28.11-.55.21a4,4,0,0,0-.61.29c-.06,0-.14,0-.21,0s-.81.46-.84.48c-.18.06-.31.2-.56.13,0,0-.08,0-.11,0a6.56,6.56,0,0,1-.89.41,2.44,2.44,0,0,0-.43.28l-.1,0a.35.35,0,0,0-.11,0,5.82,5.82,0,0,0-1,.72c-.06.06-.53.21-.6.3S94.5,52.78,94.5,52.85Z"
        ></path>
        <path
          className="cls-1"
          d="M84.86,30.57c0,.18-.27.1-.64-.12a1.48,1.48,0,0,1-.41-.43,1.94,1.94,0,0,1,0-.4c0-.07.43-.84.58-1.12a2.69,2.69,0,0,1,.53-.7c.42-.4.86-.77,1.3-1.13a.91.91,0,0,1,.34-.17,2.78,2.78,0,0,0,1.09-.65c.06-.05.12-.08.13-.18s.91-.84,1.05-.87c.37-.08.71-.21,1.06-.32.06,0,.08-.07.18,0s.29,0,.39,0a2,2,0,0,1,.45-.16,1,1,0,0,1,.35.08c.11,0,.29.31.3.35s.15.22.24.32l.1.11a4.6,4.6,0,0,1-.37,1.2s-1,.94-1.11,1.06-.15.07-.24.08-.81.75-.85.76c-.19.1-.32.29-.61.24-.06,0-.09,0-.12.05a5.22,5.22,0,0,1-1,.53c-.16.09-.29.22-.44.32a.38.38,0,0,1-.1,0,.33.33,0,0,0-.13,0,9.42,9.42,0,0,0-1,.76,6.13,6.13,0,0,0-.64.3S84.87,30.49,84.86,30.57Z"
        ></path>
        <path
          className="cls-1"
          d="M58.4,19.23c.11.16-.11.3-.5.43a1.33,1.33,0,0,1-.56,0,2.12,2.12,0,0,1-.31-.26c-.05-.05-.35-.9-.5-1.17a3.71,3.71,0,0,1-.26-.82c-.12-.56-.29-1.1-.39-1.65a1.21,1.21,0,0,1,0-.38,2.52,2.52,0,0,0-.13-1.28c0-.07,0-.15-.13-.2a2.76,2.76,0,0,1-.38-1.39,8.58,8.58,0,0,0,.19-1.22c0-.06,0-.11,0-.18s.13-.27.14-.4a2,2,0,0,1,.08-.53c.06-.1.18-.22.25-.32a.42.42,0,0,1,.31-.09c.1.06.19,0,.28-.06l.1,0a3.65,3.65,0,0,1,1.09.85s.15.34.31.7a7.8,7.8,0,0,0,.37.8c.05.08,0,.18,0,.27s.39,1.14.39,1.19c0,.24.13.47,0,.74a.16.16,0,0,0,0,.15,6.51,6.51,0,0,1,.05,1.25c0,.22,0,.42,0,.64a.84.84,0,0,1,0,.12,1,1,0,0,0,0,.14c0,.5-.06,1,0,1.5,0,.12-.2.67-.17.8S58.35,19.17,58.4,19.23Z"
        ></path>
        <path
          className="cls-1"
          d="M26,21c-.21,0-.1-.32.21-.74a2.42,2.42,0,0,1,.56-.46l.44-.06c.07,0,.8.4,1.08.48a2.35,2.35,0,0,1,.67.39l1.28.9a.78.78,0,0,1,.25.26,2.21,2.21,0,0,0,1,.78c.07,0,.12.08.22.05a3.43,3.43,0,0,1,1.25.66,11.21,11.21,0,0,0,.77.91s.11,0,.1.16.1.28.19.36a1.55,1.55,0,0,1,.35.37,1.09,1.09,0,0,1,.07.36c0,.12-.21.4-.25.42s-.15.23-.22.36a.57.57,0,0,1-.08.13,4.23,4.23,0,0,1-1.24.07L32,26.11c-.34-.14-.7-.28-.78-.3s-.13-.11-.18-.18-1.09-.43-1.13-.47-.43-.19-.52-.5c0-.05-.06-.07-.1-.09a5.07,5.07,0,0,1-1-.77,6.13,6.13,0,0,0-.51-.38s0-.07-.07-.1a.29.29,0,0,0-.08-.13c-.4-.31-.7-.73-1.12-1-.11-.06-.32-.64-.43-.72S26.1,21,26,21Z"
        ></path>
      </g>
    </svg>
  ),
};
