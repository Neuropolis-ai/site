<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Telegram Card */}
  <div className="relative group overflow-hidden rounded-3xl transition-all duration-500">
    {/* Glass Background & Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 backdrop-blur-md z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-light/40 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:duration-500 z-0"></div>
    
    {/* Border */}
    <div className="absolute inset-px rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-800/50 z-10"></div>
    
    {/* Card Content */}
    <div className="relative p-8 z-20">
      <div className="flex items-center gap-5 mb-7">
        {/* Icon Container */}
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-primary to-primary-light opacity-30 rounded-2xl blur-xl group-hover:opacity-60 transition-all duration-700"></div>
          <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/20 border border-white/20 dark:border-white/10 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-primary group-hover:to-primary-light transition-all duration-300">
          Telegram
        </h4>
      </div>
      
      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {[
          "Обработка текстовых сообщений и медиафайлов",
          "Интерактивные кнопки и встроенные клавиатуры",
          "Интеграция с платежными системами",
          "Создание полноценных мини-приложений внутри мессенджера"
        ].map((item, index) => (
          <li key={index} className="flex items-start group/item">
            <div className="relative mt-0.5 flex-shrink-0 mr-3">
              <div className="absolute inset-0 bg-primary/20 rounded-full -m-1 opacity-0 group-hover/item:opacity-100 transition-all duration-300 blur-sm"></div>
              <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="m5 12 5 5 9-9"></path>
                </svg>
              </div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-primary-dark dark:group-hover/item:text-primary-light transition-all duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800/30">
        <a className="group inline-flex items-center relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300" href="#chatbots-cases">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
          <span className="relative flex items-center font-medium text-primary dark:text-primary-light group-hover:text-white transition-colors duration-300">
            Посмотреть примеры
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>

  {/* WhatsApp Card */}
  <div className="relative group overflow-hidden rounded-3xl transition-all duration-500">
    {/* Glass Background & Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 backdrop-blur-md z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-light/40 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:duration-500 z-0"></div>
    
    {/* Border */}
    <div className="absolute inset-px rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-800/50 z-10"></div>
    
    {/* Card Content */}
    <div className="relative p-8 z-20">
      <div className="flex items-center gap-5 mb-7">
        {/* Icon Container */}
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-primary to-primary-light opacity-30 rounded-2xl blur-xl group-hover:opacity-60 transition-all duration-700"></div>
          <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/20 border border-white/20 dark:border-white/10 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-primary group-hover:to-primary-light transition-all duration-300">
          WhatsApp
        </h4>
      </div>
      
      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {[
          "Коммуникация через официальное API WhatsApp Business",
          "Отправка текстовых сообщений, изображений и файлов",
          "Уведомления и рассылки с соблюдением политик платформы",
          "Многоуровневые сценарии диалогов с клиентами"
        ].map((item, index) => (
          <li key={index} className="flex items-start group/item">
            <div className="relative mt-0.5 flex-shrink-0 mr-3">
              <div className="absolute inset-0 bg-primary/20 rounded-full -m-1 opacity-0 group-hover/item:opacity-100 transition-all duration-300 blur-sm"></div>
              <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="m5 12 5 5 9-9"></path>
                </svg>
              </div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-primary-dark dark:group-hover/item:text-primary-light transition-all duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800/30">
        <a className="group inline-flex items-center relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300" href="#chatbots-cases">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
          <span className="relative flex items-center font-medium text-primary dark:text-primary-light group-hover:text-white transition-colors duration-300">
            Посмотреть примеры
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>

  {/* Website Card */}
  <div className="relative group overflow-hidden rounded-3xl transition-all duration-500">
    {/* Glass Background & Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 backdrop-blur-md z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary-light/40 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:duration-500 z-0"></div>
    
    {/* Border */}
    <div className="absolute inset-px rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-800/50 z-10"></div>
    
    {/* Card Content */}
    <div className="relative p-8 z-20">
      <div className="flex items-center gap-5 mb-7">
        {/* Icon Container */}
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-primary to-primary-light opacity-30 rounded-2xl blur-xl group-hover:opacity-60 transition-all duration-700"></div>
          <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/20 border border-white/20 dark:border-white/10 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 group-hover:from-primary group-hover:to-primary-light transition-all duration-300">
          Веб-сайт
        </h4>
      </div>
      
      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {[
          "Интерактивные виджеты для веб-сайта в соответствии с дизайном",
          "Многоязычная поддержка для международных сайтов",
          "Омниканальность с сохранением истории из других каналов",
          "Проактивное взаимодействие с посетителями сайта"
        ].map((item, index) => (
          <li key={index} className="flex items-start group/item">
            <div className="relative mt-0.5 flex-shrink-0 mr-3">
              <div className="absolute inset-0 bg-primary/20 rounded-full -m-1 opacity-0 group-hover/item:opacity-100 transition-all duration-300 blur-sm"></div>
              <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="m5 12 5 5 9-9"></path>
                </svg>
              </div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-primary-dark dark:group-hover/item:text-primary-light transition-all duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800/30">
        <a className="group inline-flex items-center relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300" href="#chatbots-cases">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
          <span className="relative flex items-center font-medium text-primary dark:text-primary-light group-hover:text-white transition-colors duration-300">
            Посмотреть примеры
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</div> 