'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 截取目标 ID（如 /projects -> projects）
    const targetId = pathname.replace('/', '');
    
    if (targetId === 'projects' || targetId === 'experience') {
      // 延迟处理以确保 DOM 已完全挂载
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else if (pathname === '/') {
      // 返回首页顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}
