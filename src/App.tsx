export default function App() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  console.log(apiKey);

  const [searchTerm, setSearchTerm] = useState('');

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, CalendarDays, BarChart3, PieChart } from 'lucide-react';
import { blocks } from './data';
import { Category, StudyRecord } from './types';
import TopicCard from './components/TopicCard';
import SuggestionCard from './components/SuggestionCard';

const categories: Category[] = [
  'Saúde Coletiva',
  'Medicina de Família e Comunidade',
  'G.O',
  'Pediatria',
  'Cirurgia',
  'Clínica Médica',
  'CofBasics',
  'Saúde Mental'
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todas'>('Todas');
  const [studyRecord, setStudyRecord] = useState<StudyRecord>({});
  
  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('medcof-schedule-v1');
    if (saved) {
      try {
        setStudyRecord(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved schedule", e);
      }
    }
  }, []);

  // Save to local storage on update
  useEffect(() => {
    localStorage.setItem('medcof-schedule-v1', JSON.stringify(studyRecord));
  }, [studyRecord]);

  const toggleStudy = (topicId: string) => {
    setStudyRecord(prev => {
      const current = prev[topicId];
      if (current) {
        // Remove if exists (uncheck)
        const newState = { ...prev };
        delete newState[topicId];
        return newState;
      } else {
        // Add if new (check)
        return {
          ...prev,
          [topicId]: {
            studiedAt: new Date().toISOString(),
            revision1Done: false,
            revision2Done: false,
            revision3Done: false
          }
        };
      }
    });
  };

  const toggleRevision = (topicId: string, revision: 'revision1Done' | 'revision2Done' | 'revision3Done') => {
    setStudyRecord(prev => {
      const topic = prev[topicId];
      if (!topic) return prev;
      
      return {
        ...prev,
        [topicId]: {
          ...topic,
          [revision]: !topic[revision]
        }
      };
    });
  };

  const filteredBlocks = useMemo(() => {
    return blocks.map(block => {
      const filteredTopics = block.topics.filter(topic => {
        const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              topic.teacher.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todas' || topic.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
      return { ...block, topics: filteredTopics };
    }).filter(block => block.topics.length > 0);
  }, [searchTerm, selectedCategory]);

  const progress = useMemo(() => {
    let totalTopics = 0;
    let completedTopics = 0;
    blocks.forEach(b => b.topics.forEach(t => {
      totalTopics++;
      if (studyRecord[t.id]) completedTopics++;
    }));
    return Math.round((completedTopics / totalTopics) * 100) || 0;
  }, [studyRecord]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-red-200 shadow-lg">EX</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-none">Extensivo MedCof</h1>
                <p className="text-xs text-gray-500 font-medium mt-1">Cronograma ENAMED 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-1 md:justify-end">
               {/* Progress Widget */}
               <div className="hidden md:flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                  <div className="relative w-8 h-8">
                     <svg className="w-full h-full transform -rotate-90">
                       <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-200" />
                       <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={88} strokeDashoffset={88 - (88 * progress / 100)} className="text-red-600 transition-all duration-1000 ease-out" />
                     </svg>
                     <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">{progress}%</span>
                  </div>
                  <div className="text-xs font-medium text-gray-600 pr-2">Concluído</div>
               </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar aula ou professor..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-red-500 focus:ring-0 rounded-lg text-sm transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative min-w-[200px]">
               <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Filter className="w-4 h-4 text-gray-400" />
               </div>
               <select 
                 className="w-full pl-10 pr-8 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-red-500 focus:ring-0 rounded-lg text-sm appearance-none cursor-pointer transition-all"
                 value={selectedCategory}
                 onChange={(e) => setSelectedCategory(e.target.value as any)}
               >
                 <option value="Todas">Todas as Matérias</option>
                 {categories.map(c => <option key={c} value={c}>{c}</option>)}
               </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        
        {/* Suggestion Card (from PDF) */}
        <SuggestionCard />

        {/* Mobile Progress Bar */}
        <div className="md:hidden mb-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
           <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
             <div className="h-full bg-red-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
           </div>
           <span className="text-sm font-bold text-gray-700">{progress}%</span>
        </div>

        <div className="space-y-8">
          {filteredBlocks.map((block) => (
            <div key={block.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 mb-4 sticky top-[140px] md:top-[140px] z-10 py-2 -mx-4 px-4 backdrop-blur-sm bg-gray-50/90 md:bg-transparent md:backdrop-blur-none">
                 <h2 className="text-lg font-bold text-gray-800">{block.name}</h2>
                 <div className="h-px flex-1 bg-gray-200"></div>
                 <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-md border border-gray-200 shadow-sm">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>Libera em {block.releaseDate}</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {block.topics.map(topic => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    studyData={studyRecord[topic.id]} 
                    onToggleStudy={toggleStudy} 
                    onToggleRevision={toggleRevision}
                  />
                ))}
              </div>
            </div>
          ))}

          {filteredBlocks.length === 0 && (
            <div className="text-center py-20">
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                 <Search className="w-8 h-8 text-gray-400" />
               </div>
               <h3 className="text-lg font-medium text-gray-900">Nenhum resultado encontrado</h3>
               <p className="text-gray-500 mt-1">Tente ajustar seus filtros de busca.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
         <div className="max-w-5xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p>MedCof Extensivo 2026 Interactive Schedule</p>
         </div>
      </footer>
    </div>
  );
}
