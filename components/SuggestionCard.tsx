import React from 'react';
import { Target } from 'lucide-react';

const SuggestionCard: React.FC = () => {
  return (
    <div className="bg-rose-50 dark:bg-rose-950/20 rounded-2xl p-6 shadow-sm border border-rose-100 dark:border-rose-900/50 mb-8 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-rose-100 dark:border-rose-900/50">
          <Target className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Sugestão de Aproveitamento</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-cyan-200 flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-300 font-medium">Assistir Primeiro</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-300 font-medium">Assistir após às diamantes</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-yellow-300 flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-300 font-medium">Assistir após às verdes</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-red-500 flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-300 font-medium">Assistir após às amarelas</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;