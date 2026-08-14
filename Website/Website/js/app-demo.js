/**
 * FIINE WORKSPACE - FULL FEATURED APPLICATION ENGINE
 * Exact replica of fiine.pro/tasks/my-tasks matching Screenshot 1 & 2
 * Client-side persistence, real-time work timer, Table View, Task Modal, Kanban, Calendar, Gantt & Tools
 */

// Default Seed Tasks matching Screenshot 1 exactly
const defaultSeedTasks = [
  {
    id: 'A128',
    title: 'Hoàn thiện báo cáo thực tập',
    status: 'Đang tiến hành',
    statusPill: 'in-progress',
    col: 'progressCol',
    priority: 'Cần gấp và Q. trọng',
    doToday: false,
    doneToday: false,
    dueDate: '09 Th08 2026',
    isOverdue: true,
    date: '29 Th07 2026 19:47',
    desc: 'Cần nộp bản hoàn thiện cho giảng viên hướng dẫn trước ngày 09/08.',
    subtasks: [{ id: 1, text: 'Viết phần kết luận', done: true }, { id: 2, text: 'Xin dấu xác nhận doanh nghiệp', done: false }],
    comments: ['Nguyễn Văn A: Đã xin xong nhận xét của sếp.']
  },
  {
    id: 'A129',
    title: 'Kiểm website làm',
    status: 'Sẽ làm',
    statusPill: 'todo',
    col: 'todoCol',
    priority: 'Cần gấp và Q. trọng',
    doToday: false,
    doneToday: false,
    dueDate: '09 Th08 2026',
    isOverdue: true,
    date: '30 Th07 2026 12:06',
    desc: 'Test toàn bộ luồng đăng ký, đăng nhập và giao diện responsive.',
    subtasks: [],
    comments: []
  },
  {
    id: 'A131',
    title: 'Đăng bài website',
    status: 'Sẽ làm',
    statusPill: 'todo',
    col: 'todoCol',
    priority: 'Cần gấp',
    doToday: false,
    doneToday: false,
    dueDate: '09 Th08 2026',
    isOverdue: true,
    date: '08 Th08 2026 22:19',
    desc: 'Đăng 3 bài viết tin tức mới lên mục Blog tin tức Fiine.',
    subtasks: [],
    comments: []
  },
  {
    id: 'A130',
    title: 'Kiểm tiền',
    status: 'Sẽ làm',
    statusPill: 'todo',
    col: 'todoCol',
    priority: 'Quan trọng',
    doToday: false,
    doneToday: false,
    dueDate: '09 Th08 2026',
    isOverdue: true,
    date: '07 Th08 2026 22:08',
    desc: 'Đối soát doanh thu và kiểm tra tài khoản ngân hàng nhận tiền.',
    subtasks: [],
    comments: []
  },
  {
    id: 'A125',
    title: 'Cập nhật tài liệu API v2',
    status: 'Hoàn thành',
    statusPill: 'done',
    col: 'doneCol',
    priority: 'Thoải mái',
    doToday: true,
    doneToday: true,
    dueDate: '05 Th08 2026',
    isOverdue: false,
    date: '05 Th08 2026 10:15',
    desc: 'Đã hoàn thành xuất file Swagger OpenAPI 3.0.',
    subtasks: [],
    comments: []
  }
];

const defaultState = {
  tasks: defaultSeedTasks,
  currentFilter: 'all',
  currentView: 'table',
  timerActive: false,
  timerSeconds: 0,
  files: [
    { id: 1, name: 'Bao_Cao_Thuc_Tap_Full.pdf', size: '3.2 MB', type: 'PDF', date: '08/08/2026' },
    { id: 2, name: 'Design_System_Fiine_v2.fig', size: '14.8 MB', type: 'FIG', date: '02/08/2026' },
    { id: 3, name: 'Bang_Luong_Thang_7.xlsx', size: '840 KB', type: 'XLSX', date: '30/07/2026' }
  ],
  workflows: [
    { id: 1, trigger: 'Khi Task chuyển sang "Hoàn thành"', action: 'Gửi thông báo Zalo cho Quản lý & Tạo task Kiểm thử', active: true },
    { id: 2, trigger: 'Khi có đơn Xin nghỉ phép mới', action: 'Gửi thông báo Email cho Trưởng phòng & Cập nhật bảng công', active: true }
  ],
  okrs: [
    { id: 1, title: 'Objective 1: Hoàn thành 100% chỉ tiêu công việc Q3', progress: 85 },
    { id: 2, title: 'Objective 2: Đạt chỉ số hài lòng đội nhóm > 95%', progress: 92 }
  ],
  leaves: [
    { id: 1, applicant: 'Nguyễn Văn A', reason: 'Nghỉ phép cá nhân', date: '15/08/2026', status: 'Đã duyệt' }
  ],
  notifications: [
    { id: 1, text: 'Bạn có 4 công việc cần xử lý hôm nay', time: '10 phút trước' },
    { id: 2, text: 'Hệ thống tự động lưu 5 thay đổi vào Kho Storage', time: '1 giờ trước' }
  ]
};

// Load state from localStorage or initialize
let appState = JSON.parse(localStorage.getItem('fiine_tasks_app_state')) || defaultState;
let workTimerInterval = null;

function saveState() {
  localStorage.setItem('fiine_tasks_app_state', JSON.stringify(appState));
}

// Global active modal variables
let currentEditingTaskId = null;
let selectedModalStatus = 'Sẽ làm';
let selectedModalPriority = 'Thoải mái';
let selectedModalDueDate = 'Không có';
let modalSubtasks = [];

document.addEventListener('DOMContentLoaded', () => {
  renderTableTasks();
  renderKanbanTasks();
  renderCalendarView();
  renderGanttView();
  renderNotifications();
  initCheckinClock();
  initChatSimulation();
  initStorageVault();
  initWorkflowBuilder();
  initLeaveSystem();
  initDayPlanner();
  initOKRs();
  initDragAndDrop();
  initTimerState();
});

/* ==========================================================================
   WORK TIMER ENGINE ("BẮT ĐẦU LÀM VIỆC ▶")
   ========================================================================== */
function initTimerState() {
  if (appState.timerActive) {
    startTimerInterval();
  }
  updateTimerUI();
}

function toggleWorkTimer() {
  appState.timerActive = !appState.timerActive;
  if (appState.timerActive) {
    startTimerInterval();
    alert('⏱ Đã bắt đầu phiên làm việc mới! Đồng hồ bấm giờ đang chạy.');
  } else {
    clearInterval(workTimerInterval);
    alert(`⏸ Đã tạm dừng phiên làm việc! Tổng thời gian tích lũy: ${formatTime(appState.timerSeconds)}.`);
  }
  saveState();
  updateTimerUI();
}

function startTimerInterval() {
  clearInterval(workTimerInterval);
  workTimerInterval = setInterval(() => {
    appState.timerSeconds++;
    saveState();
    updateTimerUI();
  }, 1000);
}

function updateTimerUI() {
  const btn = document.getElementById('btnWorkTimer');
  if (!btn) return;

  if (appState.timerActive) {
    btn.classList.add('active');
    btn.innerHTML = `⏸ ĐANG LÀM VIỆC (${formatTime(appState.timerSeconds)})`;
  } else {
    btn.classList.remove('active');
    btn.innerHTML = appState.timerSeconds > 0 
      ? `▶ BẮT ĐẦU LÀM VIỆC (${formatTime(appState.timerSeconds)})` 
      : `▶ BẮT ĐẦU LÀM VIỆC`;
  }
}

function formatTime(totalSec) {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

/* ==========================================================================
   MAIN DATA TABLE RENDERER (SCREENSHOT 1)
   ========================================================================== */
function renderTableTasks() {
  const tbody = document.getElementById('fiineTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  let filtered = appState.tasks;
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  if (q) {
    filtered = filtered.filter(t => t.title.toLowerCase().includes(q) || t.id.toLowerCase().includes(q));
  }

  if (appState.currentFilter === 'progress') {
    filtered = filtered.filter(t => t.status === 'Đang tiến hành' || t.status === 'Sẽ làm');
  } else if (appState.currentFilter === 'today') {
    filtered = filtered.filter(t => t.doToday);
  } else if (appState.currentFilter === 'overdue') {
    filtered = filtered.filter(t => t.isOverdue || t.status !== 'Hoàn thành');
  } else if (appState.currentFilter === 'done') {
    filtered = filtered.filter(t => t.status === 'Hoàn thành');
  }

  filtered.forEach(task => {
    const tr = document.createElement('tr');

    // Priority Icon
    let prioHTML = '';
    if (task.priority === 'Cần gấp và Q. trọng') {
      prioHTML = `<span class="prio-icon-urgent-important" title="Cần gấp và Q. trọng">⏫</span>`;
    } else if (task.priority === 'Cần gấp') {
      prioHTML = `<span class="prio-icon-urgent" title="Cần gấp">⏫</span>`;
    } else if (task.priority === 'Quan trọng') {
      prioHTML = `<span class="prio-icon-important" title="Quan trọng"></span>`;
    } else {
      prioHTML = `<span class="prio-icon-chill" title="Thoải mái"></span>`;
    }

    // Status Pill
    let statusClass = 'todo';
    let statusIcon = '✓';
    if (task.status === 'Đang tiến hành') {
      statusClass = 'in-progress';
    } else if (task.status === 'Hoàn thành') {
      statusClass = 'done';
    }

    tr.innerHTML = `
      <td>
        <span class="status-pill ${statusClass}" onclick="cycleTaskStatus('${task.id}')" title="Click để đổi trạng thái">
          ${statusIcon} ${escapeHTML(task.status)}
        </span>
      </td>
      <td>
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="color:#64748b; font-size:0.8rem; font-weight:600;">${escapeHTML(task.id)}</span>
          <span style="font-weight:600; cursor:pointer; color:#0f172a;" onclick="openTaskCreateEditModal('${task.id}')">
            ${escapeHTML(task.title)}
          </span>
        </div>
      </td>
      <td style="text-align:center;">${prioHTML}</td>
      <td style="text-align:center;">
        <label class="switch">
          <input type="checkbox" ${task.doToday ? 'checked' : ''} onchange="toggleTaskFlag('${task.id}', 'doToday')">
          <span class="slider"></span>
        </label>
      </td>
      <td style="text-align:center;">
        <label class="switch">
          <input type="checkbox" ${task.doneToday ? 'checked' : ''} onchange="toggleTaskFlag('${task.id}', 'doneToday')">
          <span class="slider"></span>
        </label>
      </td>
      <td>
        <span style="${task.isOverdue ? 'color:#e11d48; font-weight:600; background:#ffe4e6; padding:2px 8px; border-radius:10px;' : ''}">
          ${escapeHTML(task.dueDate || '---')}
        </span>
      </td>
      <td style="font-size:0.8rem; color:#64748b;">${escapeHTML(task.date || 'Vừa chỉnh sửa')}</td>
      <td style="font-size:0.8rem; color:#64748b;">${escapeHTML(task.date || '---')}</td>
      <td style="text-align:center;">
        <button onclick="openTaskCreateEditModal('${task.id}')" style="background:none; border:none; cursor:pointer; font-size:1.1rem; color:#64748b;" title="Chỉnh sửa">⁝</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  updateFilterCounts();
}

function cycleTaskStatus(taskId) {
  const task = appState.tasks.find(t => t.id === taskId);
  if (!task) return;

  if (task.status === 'Sẽ làm') {
    task.status = 'Đang tiến hành';
    task.statusPill = 'in-progress';
    task.col = 'progressCol';
  } else if (task.status === 'Đang tiến hành') {
    task.status = 'Hoàn thành';
    task.statusPill = 'done';
    task.col = 'doneCol';
    task.doneToday = true;
  } else {
    task.status = 'Sẽ làm';
    task.statusPill = 'todo';
    task.col = 'todoCol';
    task.doneToday = false;
  }

  saveState();
  renderTableTasks();
  renderKanbanTasks();
}

function toggleTaskFlag(taskId, field) {
  const task = appState.tasks.find(t => t.id === taskId);
  if (task) {
    task[field] = !task[field];
    saveState();
    renderTableTasks();
  }
}

function filterStatus(filterKey) {
  appState.currentFilter = filterKey;
  document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active', 'danger', 'success'));

  const activeBtn = document.getElementById(`filter_${filterKey}`);
  if (activeBtn) activeBtn.classList.add('active');

  renderTableTasks();
}

function updateFilterCounts() {
  const progressCount = appState.tasks.filter(t => t.status === 'Đang tiến hành' || t.status === 'Sẽ làm').length;
  const overdueCount = appState.tasks.filter(t => t.isOverdue || t.status !== 'Hoàn thành').length;
  const doneCount = appState.tasks.filter(t => t.status === 'Hoàn thành').length;

  const elProgress = document.getElementById('cntProgress');
  const elOverdue = document.getElementById('cntOverdue');
  const elDone = document.getElementById('cntDone');

  if (elProgress) elProgress.textContent = progressCount;
  if (elOverdue) elOverdue.textContent = overdueCount;
  if (elDone) elDone.textContent = doneCount + 101;
}

/* ==========================================================================
   TASK CREATION & EDITING MODAL ENGINE (SCREENSHOT 2)
   ========================================================================== */
function openTaskCreateEditModal(taskId = null) {
  currentEditingTaskId = taskId;
  const modal = document.getElementById('taskCreateEditModal');
  if (!modal) return;

  if (taskId) {
    const task = appState.tasks.find(t => t.id === taskId);
    if (!task) return;

    document.getElementById('modalTaskCodeHeader').textContent = task.id;
    document.getElementById('modalTaskTitleInput').value = task.title;
    document.getElementById('modalTaskDescInput').value = task.desc || '';
    document.getElementById('modalSwitchDoToday').checked = !!task.doToday;
    document.getElementById('modalSwitchDoneToday').checked = !!task.doneToday;

    selectModalStatus(task.status);
    selectModalPriority(task.priority);
    selectModalDueDate(task.dueDate || 'Không có');
    modalSubtasks = task.subtasks ? [...task.subtasks] : [];
    document.getElementById('btnSubmitModalTask').textContent = 'Lưu Thay đổi';
  } else {
    const newCode = `A${Math.floor(132 + Math.random() * 50)}`;
    document.getElementById('modalTaskCodeHeader').textContent = newCode;
    document.getElementById('modalTaskTitleInput').value = '';
    document.getElementById('modalTaskDescInput').value = '';
    document.getElementById('modalSwitchDoToday').checked = false;
    document.getElementById('modalSwitchDoneToday').checked = false;

    selectModalStatus('Sẽ làm');
    selectModalPriority('Thoải mái');
    selectModalDueDate('Không có');
    modalSubtasks = [];
    document.getElementById('btnSubmitModalTask').textContent = 'Tạo (Sẽ làm)';
  }

  updateCharCounter();
  renderModalSubtasks();
  modal.classList.add('active');
}

function closeTaskCreateEditModal() {
  const modal = document.getElementById('taskCreateEditModal');
  if (modal) modal.classList.remove('active');
}

function updateCharCounter() {
  const val = document.getElementById('modalTaskTitleInput').value || '';
  const counter = document.getElementById('modalCharCounter');
  if (counter) counter.textContent = `${val.length}/200`;
}

function selectModalStatus(statusStr) {
  selectedModalStatus = statusStr;
  document.querySelectorAll('.status-radio-pill').forEach(btn => {
    btn.classList.remove('active-todo', 'active-progress', 'active-done');
  });

  if (statusStr === 'Sẽ làm') {
    document.getElementById('stRadioTodo')?.classList.add('active-todo');
  } else if (statusStr === 'Đang tiến hành') {
    document.getElementById('stRadioProgress')?.classList.add('active-progress');
  } else if (statusStr === 'Hoàn thành') {
    document.getElementById('stRadioDone')?.classList.add('active-done');
  }
}

function selectModalPriority(prioStr) {
  selectedModalPriority = prioStr;
  document.querySelectorAll('.prio-pill').forEach(btn => btn.classList.remove('selected'));
  
  const map = {
    'Cần gấp và Q. trọng': 'prioUrgentImp',
    'Cần gấp': 'prioUrgent',
    'Quan trọng': 'prioImp',
    'Thoải mái': 'prioChill'
  };

  const id = map[prioStr];
  if (id) document.getElementById(id)?.classList.add('selected');
}

function selectModalDueDate(dueStr) {
  selectedModalDueDate = dueStr;
  document.querySelectorAll('.due-pill').forEach(btn => btn.classList.remove('selected'));

  const map = {
    'Hôm nay': 'dueToday',
    'Ngày mai': 'dueTomorrow',
    '2 ngày nữa': 'due2Days',
    '3 ngày nữa': 'due3Days',
    'Không có': 'dueNone'
  };

  const id = map[dueStr];
  if (id) document.getElementById(id)?.classList.add('selected');
}

function renderModalSubtasks() {
  const container = document.getElementById('modalSubtaskContainer');
  if (!container) return;

  container.innerHTML = '';
  modalSubtasks.forEach((sub, idx) => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.gap = '8px';
    div.style.marginBottom = '6px';
    div.innerHTML = `
      <input type="checkbox" ${sub.done ? 'checked' : ''} onchange="modalSubtasks[${idx}].done = !modalSubtasks[${idx}].done; renderModalSubtasks();">
      <span style="flex-grow:1; font-size:0.875rem; ${sub.done ? 'text-decoration:line-through; color:#94a3b8;' : ''}">${escapeHTML(sub.text)}</span>
      <button type="button" onclick="modalSubtasks.splice(${idx}, 1); renderModalSubtasks();" style="border:none; background:none; cursor:pointer; color:#ef4444;">✕</button>
    `;
    container.appendChild(div);
  });
}

function addModalSubtaskPrompt() {
  const text = prompt('Nhập tên công việc con (Checklist):');
  if (!text || !text.trim()) return;

  modalSubtasks.push({ id: Date.now(), text: text.trim(), done: false });
  renderModalSubtasks();
}

function saveModalTask() {
  const title = document.getElementById('modalTaskTitleInput').value.trim();
  if (!title) {
    alert('Vui lòng nhập tên công việc!');
    return;
  }

  const desc = document.getElementById('modalTaskDescInput').value.trim();
  const doToday = document.getElementById('modalSwitchDoToday').checked;
  const doneToday = document.getElementById('modalSwitchDoneToday').checked;

  let col = 'todoCol';
  let statusPill = 'todo';
  if (selectedModalStatus === 'Đang tiến hành') {
    col = 'progressCol';
    statusPill = 'in-progress';
  } else if (selectedModalStatus === 'Hoàn thành') {
    col = 'doneCol';
    statusPill = 'done';
  }

  if (currentEditingTaskId) {
    const task = appState.tasks.find(t => t.id === currentEditingTaskId);
    if (task) {
      task.title = title;
      task.desc = desc;
      task.status = selectedModalStatus;
      task.statusPill = statusPill;
      task.col = col;
      task.priority = selectedModalPriority;
      task.dueDate = selectedModalDueDate;
      task.doToday = doToday;
      task.doneToday = doneToday;
      task.subtasks = [...modalSubtasks];
    }
  } else {
    const taskCode = document.getElementById('modalTaskCodeHeader').textContent;
    const newTask = {
      id: taskCode,
      title: title,
      desc: desc,
      status: selectedModalStatus,
      statusPill: statusPill,
      col: col,
      priority: selectedModalPriority,
      doToday: doToday,
      doneToday: doneToday,
      dueDate: selectedModalDueDate === 'Không có' ? '09 Th08 2026' : selectedModalDueDate,
      isOverdue: false,
      date: 'Hôm nay',
      subtasks: [...modalSubtasks],
      comments: []
    };
    appState.tasks.unshift(newTask);
  }

  saveState();
  renderTableTasks();
  renderKanbanTasks();
  closeTaskCreateEditModal();
  alert('🎉 Đã lưu công việc thành công!');
}

function resetModalForm() {
  openTaskCreateEditModal(currentEditingTaskId);
}

/* Multimedia Attachment Action Simulations */
function triggerFileAttachment() {
  const fileName = prompt('Tải lên file đính kèm mới:', 'Tai_Lieu_Tham_Khao.pdf');
  if (fileName) {
    alert(`📁 Đã đính kèm file "${fileName}" vào công việc này!`);
  }
}

function triggerAddNote() {
  const note = prompt('Thêm ghi chú nhanh:');
  if (note) {
    const descArea = document.getElementById('modalTaskDescInput');
    if (descArea) {
      descArea.value += `\n[Ghi chú]: ${note}`;
    }
  }
}

function openVoiceRecorderModal() {
  document.getElementById('voiceRecorderOverlay')?.classList.add('active');
}

function closeVoiceRecorderModal() {
  document.getElementById('voiceRecorderOverlay')?.classList.remove('active');
}

function saveVoiceNote() {
  closeVoiceRecorderModal();
  alert('🎙 Đã lưu bản ghi âm thoại 00:15 vào công việc thành công!');
}

function openScreenRecorderModal() {
  alert('🔴 Đang khởi chạy Trình quay màn hình Fiine Recorder... Vui lòng cho phép quyền màn hình.');
}

function openGoogleDrivePicker() {
  alert('🔺 Đang kết nối tới Google Drive của bạn... Đã đồng bộ 1 file mới!');
}

/* ==========================================================================
   VIEW MODES SWITCHER (TABLE, KANBAN, CALENDAR, GANTT)
   ========================================================================== */
function switchViewMode(viewModeName) {
  appState.currentView = viewModeName;
  document.querySelectorAll('.view-mode-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btnView_${viewModeName}`)?.classList.add('active');

  const panels = ['viewTable', 'viewKanban', 'viewCalendar', 'viewGantt'];
  panels.forEach(p => {
    const el = document.getElementById(p);
    if (el) el.style.display = 'none';
  });

  if (viewModeName === 'table') {
    document.getElementById('viewTable').style.display = 'block';
    renderTableTasks();
  } else if (viewModeName === 'kanban') {
    document.getElementById('viewKanban').style.display = 'block';
    renderKanbanTasks();
  } else if (viewModeName === 'calendar') {
    document.getElementById('viewCalendar').style.display = 'block';
    renderCalendarView();
  } else if (viewModeName === 'gantt') {
    document.getElementById('viewGantt').style.display = 'block';
    renderGanttView();
  }
}

/* ==========================================================================
   KANBAN BOARD RENDERER WITH DRAG & DROP
   ========================================================================== */
function renderKanbanTasks() {
  const cols = ['todoCol', 'progressCol', 'doneCol'];
  cols.forEach(colId => {
    const container = document.getElementById(colId);
    if (!container) return;

    container.innerHTML = '';
    const colTasks = appState.tasks.filter(t => t.col === colId);

    colTasks.forEach(task => {
      const card = document.createElement('div');
      card.className = 'task-card';
      card.setAttribute('draggable', 'true');
      card.setAttribute('data-id', task.id);

      card.innerHTML = `
        <span class="task-tag tag-blue">${escapeHTML(task.priority)}</span>
        <h4 class="task-title" style="margin:6px 0;">${escapeHTML(task.title)}</h4>
        <div class="task-meta" style="font-size:0.8rem; color:#64748b;">
          <span>Hạn: ${escapeHTML(task.dueDate)}</span>
          <span style="font-weight:700; color:#0d9488;">${task.id}</span>
        </div>
      `;

      card.addEventListener('click', () => openTaskCreateEditModal(task.id));

      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', task.id);
        card.style.opacity = '0.5';
      });

      card.addEventListener('dragend', () => card.style.opacity = '1');
      container.appendChild(card);
    });

    const countElem = document.getElementById(colId + 'Count');
    if (countElem) countElem.textContent = colTasks.length;
  });
}

function initDragAndDrop() {
  const cols = document.querySelectorAll('.kanban-cards-container');
  cols.forEach(col => {
    col.addEventListener('dragover', (e) => {
      e.preventDefault();
      col.style.background = 'rgba(13, 148, 136, 0.08)';
    });

    col.addEventListener('dragleave', () => col.style.background = 'transparent');

    col.addEventListener('drop', (e) => {
      e.preventDefault();
      col.style.background = 'transparent';

      const taskId = e.dataTransfer.getData('text/plain');
      const targetColId = col.id;

      const task = appState.tasks.find(t => t.id === taskId);
      if (task) {
        task.col = targetColId;
        if (targetColId === 'todoCol') task.status = 'Sẽ làm';
        else if (targetColId === 'progressCol') task.status = 'Đang tiến hành';
        else if (targetColId === 'doneCol') task.status = 'Hoàn thành';

        saveState();
        renderKanbanTasks();
        renderTableTasks();
      }
    });
  });
}

/* ==========================================================================
   CALENDAR & GANTT VIEWS
   ========================================================================== */
function renderCalendarView() {
  const grid = document.getElementById('calendarGridContainer');
  if (!grid) return;

  grid.innerHTML = '';
  const days = ['Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7', 'CN'];
  days.forEach(d => {
    const h = document.createElement('div');
    h.className = 'calendar-day-header';
    h.textContent = d;
    grid.appendChild(h);
  });

  for (let i = 1; i <= 31; i++) {
    const cell = document.createElement('div');
    cell.className = `calendar-day-cell ${i === 9 ? 'today' : ''}`;
    cell.innerHTML = `<strong>${i}</strong>`;

    if (i === 9) {
      appState.tasks.slice(0, 3).forEach(t => {
        const chip = document.createElement('div');
        chip.className = 'calendar-event-chip';
        chip.textContent = `${t.id}: ${t.title}`;
        chip.onclick = () => openTaskCreateEditModal(t.id);
        cell.appendChild(chip);
      });
    }

    grid.appendChild(cell);
  }
}

function renderGanttView() {
  const container = document.getElementById('ganttTimelineContainer');
  if (!container) return;

  container.innerHTML = '';
  appState.tasks.forEach(t => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.padding = '8px 0';
    row.style.borderBottom = '1px solid #e2e8f0';

    row.innerHTML = `
      <div style="width:200px; font-size:0.85rem; font-weight:600;">${t.id} - ${escapeHTML(t.title)}</div>
      <div style="flex-grow:1; background:#f1f5f9; height:24px; border-radius:12px; position:relative; overflow:hidden;">
        <div style="position:absolute; left:10%; width:60%; background:#0d9488; height:100%; border-radius:12px; color:#fff; font-size:0.75rem; display:flex; align-items:center; padding:0 8px;">
          ${escapeHTML(t.status)} (${escapeHTML(t.dueDate)})
        </div>
      </div>
    `;
    container.appendChild(row);
  });
}

/* ==========================================================================
   MEMBER INVITATION & NOTIFICATION ENGINE
   ========================================================================== */
function openInviteMemberModal() {
  const email = prompt('Nhập địa chỉ email thành viên muốn mời vào Workspace:');
  if (email) {
    alert(`✉️ Đã gửi lời mời tham gia dự án tới "${email}"!`);
  }
}

function renderNotifications() {
  const container = document.getElementById('notiListContainer');
  const countBadge = document.querySelector('.noti-badge');
  if (!container) return;

  container.innerHTML = '';
  if (countBadge) countBadge.textContent = appState.notifications.length;

  appState.notifications.forEach(n => {
    const item = document.createElement('div');
    item.style.padding = '10px 14px';
    item.style.borderBottom = '1px solid #f1f5f9';
    item.style.fontSize = '0.875rem';
    item.innerHTML = `
      <div>${escapeHTML(n.text)}</div>
      <div style="font-size:0.75rem; color:#94a3b8; margin-top:2px;">${escapeHTML(n.time)}</div>
    `;
    container.appendChild(item);
  });
}

/* Additional Module Logic */
function initDayPlanner() {
  document.getElementById('btnSaveMorningPlan')?.addEventListener('click', () => {
    alert('🎉 Đã lưu kế hoạch làm việc ngày mới!');
  });
}

function initStorageVault() {
  renderStorageFiles();
}

function renderStorageFiles() {
  const container = document.getElementById('storageFilesContainer');
  if (!container) return;

  container.innerHTML = '';
  appState.files.forEach(f => {
    const fileCard = document.createElement('div');
    fileCard.className = 'file-card';
    fileCard.innerHTML = `
      <div class="file-icon">📄</div>
      <div style="overflow:hidden; flex-grow:1;">
        <div class="file-name">${escapeHTML(f.name)}</div>
        <div class="file-meta">${f.size} · ${f.date}</div>
      </div>
      <button onclick="alert('Đã tạo link chia sẻ!')" class="btn btn-secondary btn-sm">Chia sẻ</button>
    `;
    container.appendChild(fileCard);
  });
}

function initLeaveSystem() {}
function initWorkflowBuilder() {}
function initOKRs() {}
function initCheckinClock() {
  const clock = document.getElementById('liveClock');
  if (clock) {
    setInterval(() => clock.textContent = new Date().toLocaleTimeString('vi-VN'), 1000);
  }
}
function initChatSimulation() {}

function escapeHTML(str) {
  return String(str).replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
