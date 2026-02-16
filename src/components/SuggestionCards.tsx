import React from 'react';
import { Target } from 'lucide-react';

const SuggestionCard: React.FC = () => {
  return (
    <div className="bg-rose-50 rounded-2xl p-6 shadow-sm border border-rose-100 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white p-2 rounded-lg shadow-sm border border-rose-100">
          <Target className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Sugestão de Aproveitamento</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-cyan-200 flex-shrink-0" />
          <span className="text-gray-600 font-medium">Assistir Primeiro</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-gray-600 font-medium">Assistir após às diamantes</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-yellow-300 flex-shrink-0" />
          <span className="text-gray-600 font-medium">Assistir após às verdes</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-4 rounded-full bg-red-500 flex-shrink-0" />
          <span className="text-gray-600 font-medium">Assistir após às amarelas</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
