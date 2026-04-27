import { lusitana } from '@/app/ui/fonts';
import {
  PencilIcon,
  FaceSmileIcon,
  RectangleGroupIcon,
  PaperAirplaneIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline';

export default function Page() {
  return (<div className={`${lusitana.className}`}>
    <a href="mailto:hcjeong@anguklaw.com" className="flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      <PaperAirplaneIcon className="w-6" />
      <p>Send Mail</p></a>
    <a href="https://www.facebook.com/AngukLawOffices/" target="_blank" className="flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      <FaceSmileIcon className="w-6" style={{color: 'blue'}}/>
      <p>Facebook(Korean)</p>
    </a>
    <a href="https://blog.naver.com/heechanjeong" target="_blank" className="flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      <RectangleGroupIcon className="w-6" style={{color: 'green'}}/>
      <p>Naver Blog(Korean)</p>
    </a>
    <a href="https://penvot.com/desk/ce7c148fb51a082809cd2508e4d8ec910ae14d9f1e9b652f75ca8cd3dcf4585e" target="_blank" className="flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      <PencilIcon className="w-6" style={{color: 'purple'}}/>
      <p>Penvot Blog(Korean)</p>
    </a>
    <a href="https://wa.me/821027743211" target="_blank" className="flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      <ChatBubbleBottomCenterTextIcon className="w-6" style={{color: 'darkcyan'}}/>
      <p>Whatsapp</p>
    </a>
    <a href="https://open.kakao.com/me/anguky" target="_blank" className="flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      <ChatBubbleLeftEllipsisIcon className="w-6" style={{color: 'burlywood'}}/>
      <p>KakaoTalk</p>
    </a>
  </div>);
}