import React from 'react';
import { CheckCircle2, Circle, CalendarClock, User, CheckSquare, Square } from 'lucide-react';
import { Topic, Category, StudyRecord } from '../types';

interface TopicCardProps {
  topic: Topic;
  studyData: StudyRecord[string] | undefined;
  onToggleStudy: (id: string) => void;
  onToggleRevision: (id: string, revision: 'revision1Done' | 'revision2Done' | 'revision3Done') => void;
}

const categoryColors: Record<Category, string> = {
  'Saúde Coletiva': 'bg-emerald-500',
  'Medicina de Família e Comunidade': 'bg-green-500',
  'G.O': 'bg-pink-500',
  'Pediatria': 'bg-yellow-400',
  'Cirurgia': 'bg-cyan-500',
  'Clínica Médica': 'bg-blue-600',
  'CofBasics': 'bg-purple-600',
  'Saúde Mental': 'bg-orange-500',
};

const TopicCard: React.FC<TopicCardProps> = ({ topic, studyData, onToggleStudy, onToggleRevision }) => {
  const isStudied = !!studyData?.studiedAt;
  const colorClass = categoryColors[topic.category] || 'bg-gray-500';

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  };

  const getRevisionDate = (baseDate: string, days: number) => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + days);
    return date;
  };

  const renderRevisionButton = (
    label: string, 
    date: Date, 
    isDone: boolean, 
    revisionKey: 'revision1Done' | 'revision2Done' | 'revision3Done'
  ) => {
    const today = new Date();
    const isPastDue = !isDone && date < today;
    
    return (
       <button 
         onClick={(e) => {
           e.stopPropagation();
           onToggleRevision(topic.id, revisionKey);
         }}
         className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs border transition-all ${
            isDone 
              ? 'bg-green-50 border-green-200 text-green-700' 
              : isPastDue 
                ? 'bg-red-50 border-red-200 text-red-700 font-medium'
                : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
         }`}
       >
          <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
             isDone ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'
          }`}>
             {isDone && <CheckCircle2 className="w-3 h-3 text-white" />}
          </div>
          <div className="flex flex-col items-start leading-none gap-0.5">
             <span className="font-semibold">{label}</span>
             <span className="opacity-80 text-[10px]">{date.toLocaleDateString('pt-BR')}</span>
          </div>
       </button>
    );
  };

  const renderRevisionInfo = () => {
    if (!studyData?.studiedAt) return null;
    
    const studiedDate = studyData.studiedAt;
    const r1Date = getRevisionDate(studiedDate, 7);
    const r2Date = getRevisionDate(studiedDate, 30);
    const r3Date = getRevisionDate(studiedDate, 60);

    return (
      <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2">
        {renderRevisionButton("R1 (7d)", r1Date, studyData.revision1Done, 'revision1Done')}
        {renderRevisionButton("R2 (30d)", r2Date, studyData.revision2Done, 'revision2Done')}
        {renderRevisionButton("R3 (60d)", r3Date, studyData.revision3Done, 'revision3Done')}
      </div>
    );
  };

  return (
    <div className={`group relative bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col ${isStudied ? 'bg-gray-50/50' : ''}`}>
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${colorClass}`} />
      
      <div className="p-4 pl-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
             <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded text-white ${colorClass}`}>
                  {topic.category}
                </span>
                {isStudied && (
                  <span className="text-[10px] font-medium text-gray-400">
                    Estudado em: {formatDate(studyData.studiedAt)}
                  </span>
                )}
             </div>
             <h3 className={`font-semibold text-gray-900 leading-tight text-lg mb-2 ${isStudied ? 'text-gray-600' : ''}`}>
               {topic.title}
             </h3>
             <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                   <User className="w-3.5 h-3.5" />
                   <span>{topic.teacher}</span>
                </div>
             </div>
          </div>

          <button 
            onClick={() => onToggleStudy(topic.id)}
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isStudied ? 'bg-green-100 text-green-600 hover:bg-green-200' : 'bg-gray-100 text-gray-300 hover:text-gray-400 hover:bg-gray-200'}`}
            title={isStudied ? "Marcar como não estudado" : "Marcar como estudado"}
          >
            {isStudied ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isStudied && (
        <div className="bg-gray-50/50 p-4 pl-6 pt-0">
          {renderRevisionInfo()}
        </div>
      )}
    </div>
  );
};

export default TopicCard;