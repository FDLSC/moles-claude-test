import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Users, Euro, AlertCircle, CheckCircle, Clock, MapPin, Camera, Signature, Home, FileText, Zap, Code, Menu, X, Plus, Download, Send, Edit2, Trash2 } from 'lucide-react';

const MolesIPadApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('readme');
  const [rolActual, setRolActual] = useState('gerente');
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Datos de demostración
  const [clientes] = useState([
    { id: 1, nombre: 'Juan García', teléfono: '666555444', zona: 'Barcelona', servicios: ['Jardín', 'Piscina'], tarifa: 45, estado: 'activo' },
    { id: 2, nombre: 'María López', teléfono: '666555445', zona: 'Sabadell', servicios: ['Jardín'], tarifa: 40, estado: 'activo' },
  ]);

  const [ordenes] = useState([
    { id: 1, número: 'OS-001', cliente_id: 1, fecha: '2026-08-18', operario: 'Pedro', duracion: 2.5, estado: 'completada' },
    { id: 2, número: 'OS-002', cliente_id: 2, fecha: '2026-08-19', operario: 'Luis', duracion: 3, estado: 'en_ejecución' },
  ]);

  const [partes] = useState([
    { id: 1, número: 'PT-001', orden_id: 1, operario: 'Pedro', fecha: '2026-08-18', horas: 2.5, estado: 'validado' },
    { id: 2, número: 'PT-002', orden_id: 2, operario: 'Luis', fecha: '2026-08-20', horas: 2, estado: 'pendiente_validación' },
  ]);

  const datosGrafico = [
    { día: 'Lun', horas: 4, facturación: 180 },
    { día: 'Mar', horas: 6, facturación: 240 },
    { día: 'Mié', horas: 5, facturación: 200 },
    { día: 'Jue', horas: 7, facturación: 280 },
    { día: 'Vie', horas: 4, facturación: 160 },
  ];

  const datosEstados = [
    { name: 'Completadas', value: 45, color: '#10b981' },
    { name: 'En ejecución', value: 12, color: '#3b82f6' },
    { name: 'Pendientes', value: 8, color: '#f59e0b' },
  ];

  // ============ PÁGINA DE INICIO ============
  const PaginaInicio = () => (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen p-8 ipad:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl ipad:text-7xl font-bold text-gray-900 mb-6">🌱 MOLES</h1>
          <p className="text-2xl ipad:text-3xl text-gray-600 mb-8">
            Sistema integral de gestión para empresas de jardinería y piscinas
          </p>
        </div>

        <div className="grid grid-cols-1 ipad:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-8 ipad:p-12 rounded-2xl">
            <Zap className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="font-bold text-xl ipad:text-2xl mb-3">Prototipo Funcional</h3>
            <p className="text-gray-600 text-lg">Ve el sistema en acción ahora</p>
          </div>
          <div className="bg-green-50 p-8 ipad:p-12 rounded-2xl">
            <Code className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="font-bold text-xl ipad:text-2xl mb-3">Optimizado iPad</h3>
            <p className="text-gray-600 text-lg">Diseño táctil y responsivo</p>
          </div>
          <div className="bg-purple-50 p-8 ipad:p-12 rounded-2xl">
            <Download className="text-purple-600 mx-auto mb-4" size={48} />
            <h3 className="font-bold text-xl ipad:text-2xl mb-3">Instalar App</h3>
            <p className="text-gray-600 text-lg">Como aplicación nativa</p>
          </div>
        </div>

        <div className="flex flex-col ipad:flex-row gap-6 justify-center mb-12">
          <button
            onClick={() => setCurrentPage('sistema')}
            className="bg-green-600 text-white px-12 py-6 ipad:py-8 rounded-2xl font-bold hover:bg-green-700 transition-all text-xl ipad:text-2xl active:scale-95"
          >
            🚀 Ver Sistema
          </button>
          <button
            onClick={() => setCurrentPage('install')}
            className="bg-blue-600 text-white px-12 py-6 ipad:py-8 rounded-2xl font-bold hover:bg-blue-700 transition-all text-xl ipad:text-2xl active:scale-95"
          >
            📱 Instalar en iPad
          </button>
        </div>

        <div className="bg-gray-800 text-white p-8 ipad:p-12 rounded-2xl text-center">
          <p className="text-2xl ipad:text-3xl mb-4">✨ Optimizado 100% para iPad Pro</p>
          <p className="text-lg ipad:text-xl text-gray-300">
            Interfaz táctil, gráficos grandes, sin zoom, totalmente responsivo
          </p>
        </div>
      </div>
    </div>
  );

  // ============ PÁGINA DEL SISTEMA ============
  const PaginaSistema = () => (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 ipad:p-10 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl ipad:text-4xl font-bold">🌱 MOLES</h1>
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="text-white ipad:hidden active:scale-90"
          >
            {menuAbierto ? <X size={32} /> : <Menu size={32} />}
          </button>
          
          <div className="hidden ipad:flex gap-4">
            {['gerente', 'comercial', 'operario'].map(rol => (
              <button
                key={rol}
                onClick={() => setRolActual(rol)}
                className={`px-8 py-3 rounded-xl font-bold text-xl capitalize transition-all active:scale-95 ${
                  rolActual === rol
                    ? 'bg-white text-green-600'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                {rol === 'gerente' ? '👨‍💼' : rol === 'comercial' ? '📱' : '🔧'} {rol}
              </button>
            ))}
          </div>
        </div>

        {menuAbierto && (
          <div className="ipad:hidden mt-4 space-y-3 pb-4">
            {['gerente', 'comercial', 'operario'].map(rol => (
              <button
                key={rol}
                onClick={() => {
                  setRolActual(rol);
                  setMenuAbierto(false);
                }}
                className={`w-full px-6 py-4 rounded-xl font-bold text-lg capitalize ${
                  rolActual === rol
                    ? 'bg-white text-green-600'
                    : 'bg-white bg-opacity-20 text-white'
                }`}
              >
                {rol === 'gerente' ? '👨‍💼' : rol === 'comercial' ? '📱' : '🔧'} {rol}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Contenido */}
      <main className="max-w-7xl mx-auto p-4 ipad:p-8">
        {rolActual === 'gerente' && (
          <div className="space-y-6">
            {/* KPIs Grid */}
            <div className="grid grid-cols-1 ipad:grid-cols-2 lg:grid-cols-3 gap-4 ipad:gap-6">
              {[
                { label: 'Clientes Activos', valor: clientes.filter(c => c.estado === 'activo').length, icon: Users, color: 'green' },
                { label: 'Horas Semana', valor: datosGrafico.reduce((s, d) => s + d.horas, 0), icon: Clock, color: 'blue' },
                { label: 'Facturación', valor: '€' + datosGrafico.reduce((s, d) => s + d.facturación, 0), icon: Euro, color: 'purple' },
              ].map((kpi, idx) => (
                <div key={idx} className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md border-l-4 border-color-500 active:scale-95 transition-transform">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm ipad:text-lg mb-2">{kpi.label}</p>
                      <p className="text-4xl ipad:text-5xl font-bold text-gray-800">{kpi.valor}</p>
                    </div>
                    <kpi.icon className="text-gray-400" size={60} />
                  </div>
                </div>
              ))}
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 ipad:grid-cols-2 gap-6">
              <div className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
                <h3 className="text-2xl ipad:text-3xl font-bold mb-6">Actividad Semanal</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={datosGrafico}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="día" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="horas" fill="#3b82f6" name="Horas" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
                <h3 className="text-2xl ipad:text-3xl font-bold mb-6">Estado de Órdenes</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={datosEstados} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                      {datosEstados.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Partes por Validar */}
            <div className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl ipad:text-3xl font-bold mb-6">Partes Pendientes</h3>
              <div className="space-y-4">
                {partes.filter(p => p.estado === 'pendiente_validación').map(parte => (
                  <div key={parte.id} className="p-6 ipad:p-8 bg-orange-50 border-2 border-orange-200 rounded-2xl flex flex-col ipad:flex-row items-start ipad:items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-xl ipad:text-2xl">{parte.número}</p>
                      <p className="text-gray-600 text-lg ipad:text-xl">⏱️ {parte.horas} horas</p>
                    </div>
                    <div className="flex gap-3 w-full ipad:w-auto">
                      <button className="flex-1 ipad:flex-none bg-green-500 text-white px-6 ipad:px-8 py-4 ipad:py-3 rounded-xl font-bold text-lg active:scale-95 transition-transform">
                        ✓ Validar
                      </button>
                      <button className="flex-1 ipad:flex-none bg-red-500 text-white px-6 ipad:px-8 py-4 ipad:py-3 rounded-xl font-bold text-lg active:scale-95 transition-transform">
                        ✗ Rechazar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {rolActual === 'comercial' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 ipad:grid-cols-3 gap-4 ipad:gap-6">
              {[
                { label: 'Clientes', valor: clientes.length, icon: Users },
                { label: 'Órdenes', valor: ordenes.length, icon: Calendar },
                { label: 'Facturación', valor: '€1,200', icon: Euro },
              ].map((kpi, idx) => (
                <div key={idx} className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
                  <p className="text-gray-500 text-lg ipad:text-xl mb-2">{kpi.label}</p>
                  <p className="text-4xl ipad:text-5xl font-bold">{kpi.valor}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl ipad:text-3xl font-bold mb-6">Directorio de Clientes</h3>
              <div className="space-y-4">
                {clientes.map(cliente => (
                  <div key={cliente.id} className="p-6 ipad:p-8 border-2 border-gray-200 rounded-2xl hover:bg-gray-50 active:scale-95 transition-all">
                    <p className="font-bold text-xl ipad:text-2xl">{cliente.nombre}</p>
                    <p className="text-gray-600 text-lg ipad:text-xl">📍 {cliente.zona}</p>
                    <p className="text-gray-600 text-lg ipad:text-xl">📱 {cliente.teléfono}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {rolActual === 'operario' && (
          <div className="space-y-6">
            <div className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl ipad:text-3xl font-bold mb-6">🗓️ Órdenes Para Hoy</h3>
              <div className="space-y-4">
                {ordenes.filter(o => o.operario === 'Pedro').map(orden => (
                  <div key={orden.id} className="p-6 ipad:p-8 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                    <p className="font-bold text-xl ipad:text-2xl mb-3">{orden.número}</p>
                    <p className="text-gray-700 text-lg ipad:text-xl mb-4">⏱️ {orden.duracion} horas estimadas</p>
                    <button className="w-full bg-green-500 text-white px-6 py-4 ipad:py-6 rounded-2xl font-bold text-xl ipad:text-2xl active:scale-95 transition-transform">
                      Iniciar Trabajo
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl ipad:text-3xl font-bold mb-6">📸 Captura de Fotos</h3>
              <div className="grid grid-cols-2 ipad:grid-cols-4 gap-4">
                <button className="aspect-square bg-blue-100 rounded-2xl flex items-center justify-center active:scale-90 transition-transform">
                  <Camera size={64} className="text-blue-600" />
                </button>
                <button className="aspect-square bg-blue-100 rounded-2xl flex items-center justify-center active:scale-90 transition-transform">
                  <Camera size={64} className="text-blue-600" />
                </button>
              </div>
            </div>

            <div className="bg-white p-6 ipad:p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl ipad:text-3xl font-bold mb-6">✍️ Firma Digital</h3>
              <div className="border-4 border-gray-300 rounded-2xl p-6 ipad:p-10 bg-gray-50 min-h-64 ipad:min-h-96">
                <p className="text-gray-500 text-center text-lg ipad:text-2xl">Toca aquí para firmar</p>
              </div>
              <button className="w-full bg-green-500 text-white px-6 py-4 ipad:py-6 rounded-2xl font-bold text-xl ipad:text-2xl mt-6 active:scale-95 transition-transform">
                ✓ Finalizar y Enviar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );

  // ============ PÁGINA DE INSTALACIÓN IPAD ============
  const PaginaInstall = () => (
    <div className="bg-white min-h-screen p-6 ipad:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl ipad:text-5xl font-bold mb-12 text-center">📱 Instalar MOLES en iPad</h1>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-3xl p-8 ipad:p-12 mb-8">
          <h2 className="text-3xl ipad:text-4xl font-bold text-blue-900 mb-6">Opción 1: Como App (Recomendado)</h2>
          
          <div className="space-y-6 text-lg ipad:text-2xl">
            <div className="flex gap-4 items-start">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xl ipad:text-2xl flex-shrink-0">1</span>
              <span>Abre Safari en tu iPad</span>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xl ipad:text-2xl flex-shrink-0">2</span>
              <span>Ve a: <code className="bg-gray-200 px-3 py-1 rounded font-mono">https://moles-xxxxx.netlify.app</code></span>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xl ipad:text-2xl flex-shrink-0">3</span>
              <span>Toca el botón de compartir (↗️) en la barra superior</span>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xl ipad:text-2xl flex-shrink-0">4</span>
              <span>Selecciona <strong>"Añadir a pantalla de inicio"</strong></span>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xl ipad:text-2xl flex-shrink-0">5</span>
              <span>Nombra: <strong>"MOLES"</strong></span>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xl ipad:text-2xl flex-shrink-0">6</span>
              <span>Tapa <strong>"Añadir"</strong></span>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 mt-8">
              <p className="text-xl ipad:text-2xl">✅ <strong>¡LISTO!</strong> MOLES aparecerá en tu pantalla de inicio como app.</p>
              <p className="text-gray-600 text-lg ipad:text-xl mt-4">Toca el icono para abrir MOLES sin pasar por Safari.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-8 ipad:p-12">
          <h2 className="text-3xl ipad:text-4xl font-bold text-green-900 mb-6">Opción 2: Safari Normal</h2>
          
          <p className="text-xl ipad:text-2xl text-gray-700 mb-6">
            Si prefieres usar Safari normalmente:
          </p>

          <ol className="space-y-4 text-lg ipad:text-2xl">
            <li className="flex gap-4">
              <span className="font-bold flex-shrink-0">1.</span>
              <span>Abre Safari</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold flex-shrink-0">2.</span>
              <span>Ve a: <code className="bg-gray-200 px-2 py-1 rounded font-mono">https://moles-xxxxx.netlify.app</code></span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold flex-shrink-0">3.</span>
              <span>¡Funciona perfectamente sin instalar nada!</span>
            </li>
          </ol>

          <p className="text-gray-600 text-lg ipad:text-xl mt-6">
            La diferencia: con la opción 1 (app), se abre más rápido. Con la opción 2 (Safari), usas el navegador normal.
          </p>
        </div>

        <div className="mt-12 bg-purple-50 border-2 border-purple-300 rounded-3xl p-8 ipad:p-12">
          <h2 className="text-3xl ipad:text-4xl font-bold text-purple-900 mb-6">💡 Tips para iPad Pro</h2>

          <div className="space-y-4 text-lg ipad:text-2xl">
            <div className="flex gap-4 items-start">
              <span className="text-3xl">🎨</span>
              <div>
                <p className="font-bold">Pantalla Dividida (Split View)</p>
                <p className="text-gray-600">Arrastra MOLES desde un lado para usar lado a lado con otra app</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">🔍</span>
              <div>
                <p className="font-bold">Zoom en Gráficos</p>
                <p className="text-gray-600">Pellizca para hacer zoom en los gráficos</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">📱</span>
              <div>
                <p className="font-bold">Modo Landscape</p>
                <p className="text-gray-600">Gira el iPad para ver más datos en pantalla</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">💾</span>
              <div>
                <p className="font-bold">Funciona Offline</p>
                <p className="text-gray-600">Los datos se guardan localmente, funciona sin WiFi</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">⌨️</span>
              <div>
                <p className="font-bold">Teclado Externo</p>
                <p className="text-gray-600">Conecta Magic Keyboard para escribir más rápido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ============ RENDERIZADO PRINCIPAL ============
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Global */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 ipad:px-8 py-4 ipad:py-6 flex items-center justify-between">
          <button
            onClick={() => {
              setCurrentPage('home');
              setMenuAbierto(false);
            }}
            className="text-3xl ipad:text-4xl font-bold text-green-600 hover:text-green-700 active:scale-90 transition-transform"
          >
            🌱 MOLES
          </button>

          <div className="hidden ipad:flex gap-4">
            {[
              { id: 'home', label: 'Inicio', icon: '🏠' },
              { id: 'sistema', label: 'Sistema', icon: '⚡' },
              { id: 'install', label: 'Instalar', icon: '📱' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMenuAbierto(false);
                }}
                className={`px-6 ipad:px-8 py-3 ipad:py-4 rounded-xl font-bold text-lg ipad:text-xl transition-all active:scale-95 ${
                  currentPage === item.id
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="ipad:hidden text-gray-600 hover:text-gray-900 active:scale-90"
          >
            {menuAbierto ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {menuAbierto && (
          <div className="ipad:hidden bg-gray-50 border-t-2 px-4 py-4 space-y-2">
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'sistema', label: 'Sistema' },
              { id: 'install', label: 'Instalar' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMenuAbierto(false);
                }}
                className={`w-full px-4 py-4 rounded-xl font-bold text-lg ${
                  currentPage === item.id
                    ? 'bg-green-100 text-green-600'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Contenido */}
      {currentPage === 'home' && <PaginaInicio />}
      {currentPage === 'sistema' && <PaginaSistema />}
      {currentPage === 'install' && <PaginaInstall />}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 ipad:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg ipad:text-xl">MOLES Jardinería © 2026 | Optimizado para iPad Pro</p>
        </div>
      </footer>
    </div>
  );
};

export default MolesIPadApp;
