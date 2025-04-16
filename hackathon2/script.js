document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');
    const profileButtons = document.querySelectorAll('.profile-btn');
    const addTaskBtn = document.getElementById('add-task-btn');
    const addEventBtn = document.getElementById('add-event-btn');
    const setGoalBtn = document.getElementById('set-goal-btn');
    const taskModal = document.getElementById('task-modal');
    const closeModal = document.querySelector('.close-modal');
    const saveTaskBtn = document.getElementById('save-task');
    const newTaskInput = document.getElementById('new-task-input');
    const addTask = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const taskFilter = document.getElementById('task-filter');

    function clicar () {
        window.location.href="index.html"

    }
    let userData = {
        name: '',
        email: '',
        password: '',
        profileType: 'general',
        profileSetup: false
      };
    
    // Current profile (general, student, athlete)
    let currentProfile = 'general';
    
    // Sample data
    let tasks = [];
    let events = [];
    let goals = [];
    
    // Initialize the app
    function init() {
        loadSampleData();
        updateDashboardStats();
        renderTaskList();
        setupEventListeners();
        generateCalendar();
    }
    
    // Load sample data
    function loadSampleData() {
        tasks = [
            { id: 1, title: 'Completar projeto do site', description: 'Finalizar o layout e funcionalidades', date: '2023-06-15', priority: 'high', completed: false },
            { id: 2, title: 'Ir à academia', description: 'Treino de pernas hoje', date: '2023-06-10', priority: 'medium', completed: false },
            { id: 3, title: 'Estudar JavaScript', description: 'Capítulo 5 do livro', date: '2023-06-12', priority: 'low', completed: true }
        ];
        
        events = [
            { id: 1, title: 'Reunião com cliente', date: '2023-06-10', time: '14:00', description: 'Discutir requisitos do projeto' },
            { id: 2, title: 'Aniversário da mãe', date: '2023-06-15', time: '19:00', description: 'Jantar em família' }
        ];
        
        goals = [
            { id: 1, title: 'Perder 5kg', description: 'Até o final do mês', deadline: '2023-06-30', category: 'health', progress: 30 },
            { id: 2, title: 'Aprender React', description: 'Completar curso online', deadline: '2023-07-15', category: 'study', progress: 10 }
        ];
    }
    
    // Update dashboard statistics
    function updateDashboardStats() {
        const today = new Date().toISOString().split('T')[0];
        const todayTasks = tasks.filter(task => task.date === today).length;
        const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).length;
        const inProgressGoals = goals.filter(goal => goal.progress < 100).length;
        
        document.getElementById('today-tasks').textContent = todayTasks;
        document.getElementById('upcoming-events').textContent = upcomingEvents;
        document.getElementById('goals-progress').textContent = inProgressGoals;
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('data-section');
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding section
                contentSections.forEach(section => section.classList.remove('active'));
                document.getElementById(sectionId).classList.add('active');
            });
        });
        
        // Profile selection
        profileButtons.forEach(button => {
            button.addEventListener('click', function() {
                profileButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentProfile = this.getAttribute('data-profile');
                // Here you would update the UI based on the selected profile
                console.log('Profile changed to:', currentProfile);
            });
        });
        
        // Task modal
        addTaskBtn.addEventListener('click', () => taskModal.style.display = 'flex');
        closeModal.addEventListener('click', () => taskModal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === taskModal) {
                taskModal.style.display = 'none';
            }
        });
        
        // Save task from modal
        saveTaskBtn.addEventListener('click', addNewTaskFromModal);
        
        // Quick add task
        addTask.addEventListener('click', addQuickTask);
        newTaskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addQuickTask();
            }
        });
        
        // Task filter
        taskFilter.addEventListener('change', renderTaskList);
    }
    
    // Add new task from modal
    function addNewTaskFromModal() {
        const title = document.getElementById('modal-task-title').value;
        const description = document.getElementById('modal-task-description').value;
        const date = document.getElementById('modal-task-date').value;
        const priority = document.getElementById('modal-task-priority').value;
        
        if (!title) {
            alert('Por favor, insira um título para a tarefa');
            return;
        }
        
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title,
            description,
            date,
            priority,
            completed: false
        };
        
        tasks.push(newTask);
        renderTaskList();
        updateDashboardStats();
        taskModal.style.display = 'none';
        
        // Clear form
        document.getElementById('modal-task-title').value = '';
        document.getElementById('modal-task-description').value = '';
        document.getElementById('modal-task-date').value = '';
        document.getElementById('modal-task-priority').value = 'medium';
    }
    
    // Add quick task
    function addQuickTask() {
        const title = newTaskInput.value.trim();
        
        if (!title) {
            alert('Por favor, insira uma descrição para a tarefa');
            return;
        }
        
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title,
            description: '',
            date: new Date().toISOString().split('T')[0],
            priority: 'medium',
            completed: false
        };
        
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTaskList();
        updateDashboardStats();
    }
    
    // Render task list
    function renderTaskList() {
        const filter = taskFilter.value;
        let filteredTasks = [...tasks];
        
        // Apply filter
        if (filter === 'today') {
            const today = new Date().toISOString().split('T')[0];
            filteredTasks = tasks.filter(task => task.date === today);
        } else if (filter === 'week') {
            const today = new Date();
            const nextWeek = new Date(today);
            nextWeek.setDate(nextWeek.getDate() + 7);
            filteredTasks = tasks.filter(task => {
                const taskDate = new Date(task.date);
                return taskDate >= today && taskDate <= nextWeek;
            });
        } else if (filter === 'month') {
            const today = new Date();
            const nextMonth = new Date(today);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            filteredTasks = tasks.filter(task => {
                const taskDate = new Date(task.date);
                return taskDate >= today && taskDate <= nextMonth;
            });
        } else if (filter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        }
        
        // Sort by date and priority
        filteredTasks.sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        
        // Render tasks
        taskList.innerHTML = '';
        
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<li class="no-tasks">Nenhuma tarefa encontrada</li>';
            return;
        }
        
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.dataset.id = task.id;
            
            const priorityClass = `priority-${task.priority}`;
            
            taskItem.innerHTML = `
                <div class="task-info">
                    <h4 class="${priorityClass}">${task.title}</h4>
                    ${task.description ? `<p>${task.description}</p>` : ''}
                    <small>${formatDate(task.date)}</small>
                </div>
                <div class="task-actions">
                    <button class="complete-btn" title="Marcar como completada"><i class="fas fa-check"></i></button>
                    <button class="delete-btn" title="Excluir tarefa"><i class="fas fa-trash"></i></button>
                </div>
            `;
            
            taskList.appendChild(taskItem);
        });
        
        // Add event listeners to task actions
        document.querySelectorAll('.complete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const taskId = parseInt(this.closest('.task-item').dataset.id);
                toggleTaskComplete(taskId);
            });
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const taskId = parseInt(this.closest('.task-item').dataset.id);
                deleteTask(taskId);
            });
        });
    }
    
    // Toggle task complete status
    function toggleTaskComplete(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
            renderTaskList();
            updateDashboardStats();
        }
    }
    
    // Delete task
    function deleteTask(taskId) {
        if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
            tasks = tasks.filter(task => task.id !== taskId);
            renderTaskList();
            updateDashboardStats();
        }
    }
    
    // Generate calendar
    function generateCalendar() {
        const calendarEl = document.getElementById('calendar');
        const currentMonthEl = document.getElementById('current-month');
        const prevMonthBtn = document.getElementById('prev-month');
        const nextMonthBtn = document.getElementById('next-month');
        
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();
        
        function renderCalendar() {
            // Clear calendar
            calendarEl.innerHTML = '';
            
            // Set month and year in header
            const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            currentMonthEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
            
            // Get first day of month and total days in month
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            
            // Add day headers
            const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
            dayNames.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.className = 'calendar-header';
                dayHeader.textContent = day;
                calendarEl.appendChild(dayHeader);
            });
            
            // Add empty cells for days before the first day of the month
            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day empty';
                calendarEl.appendChild(emptyDay);
            }
            
            // Add days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayEl = document.createElement('div');
                dayEl.className = 'calendar-day';
                
                // Check if this is today
                const today = new Date();
                if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                    dayEl.classList.add('today');
                }
                
                // Add date
                const dateEl = document.createElement('div');
                dateEl.className = 'calendar-date';
                dateEl.textContent = day;
                dayEl.appendChild(dateEl);
                
                // Add events for this day
                const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dayEvents = events.filter(event => event.date === dateStr);
                
                dayEvents.forEach(event => {
                    const eventEl = document.createElement('div');
                    eventEl.className = 'calendar-event';
                    eventEl.textContent = event.title;
                    eventEl.title = `${event.time} - ${event.description}`;
                    dayEl.appendChild(eventEl);
                });
                
                calendarEl.appendChild(dayEl);
            }
        }
        
        // Navigation
        prevMonthBtn.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });
        
        nextMonthBtn.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });
        
        // Initial render
        renderCalendar();
    }
    
    // Helper function to format date
    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
    
    // Initialize the app
    init();
});