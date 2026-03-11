import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-happiness-ink text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-happiness-ink font-bold text-xl">
              H
            </div>
            <span className="serif font-bold text-xl tracking-tight">相信幸福博覽會</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            國際扶輪3522地區 25-26年度服務計畫<br />
            用幸福與喜悅共創社會價值
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-white/40">快速連結</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white/80 transition-colors">首頁</Link></li>
            <li><Link to="/emotion" className="hover:text-white/80 transition-colors">情緒教育展</Link></li>
            <li><Link to="/fair" className="hover:text-white/80 transition-colors">幸福園遊會</Link></li>
            <li><Link to="/dance" className="hover:text-white/80 transition-colors">反毒街舞賽</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-white/40">聯絡資訊</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>主辦單位：國際扶輪3522地區</li>
            <li>地點：華山1914文化園區</li>
            <li>時間：2025年10月9~12日</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
        <p>© 2025 國際扶輪3522地區 相信幸福博覽會 版權所有</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white/60">隱私權政策</a>
          <a href="#" className="hover:text-white/60">服務條款</a>
        </div>
      </div>
    </footer>
  );
}
