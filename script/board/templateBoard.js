function templateBoardTasks() {
  return `
      <button class="boardTasks" id="buttonNoTasksToDo" onclick="showTask()">
        <p class="boardTaskCategory">User Story</p>
        <p class="boardTaskTitle">Kochwelt Page & Recipe Recommender</p>
        <p class="boardTaskDescription">Build start page with recipe recommendation</p>
        <div class="boardSubTasks">
          <div class="boardSubtaskProgress">
            <div class="boardSubtaskProgressBar"></div>        
          </div>
          <span>1/2 Subtasks</span>
        </div>
        <div class="boardTaskBottom">
          <div class="boardTaskUsers">Users</div>
          <div class="boardTaskPriority">Priority</div>
          </div>
      </button>
  `
}

function templateBoardOverlay() {
  return `
      <div class="boardOverlayContent">
        <div class="boardOverlayHeader">
            <p class="boardOverlayTaskCategory">User Story</p>
            <div class="closeBoardOverlay" onclick="closeBoardOverlay()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_274405_5666" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0"
                        y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_274405_5666)">
                        <path
                            d="M12 13.4L7.09999 18.3C6.91665 18.4834 6.68332 18.575 6.39999 18.575C6.11665 18.575 5.88332 18.4834 5.69999 18.3C5.51665 18.1167 5.42499 17.8834 5.42499 17.6C5.42499 17.3167 5.51665 17.0834 5.69999 16.9L10.6 12L5.69999 7.10005C5.51665 6.91672 5.42499 6.68338 5.42499 6.40005C5.42499 6.11672 5.51665 5.88338 5.69999 5.70005C5.88332 5.51672 6.11665 5.42505 6.39999 5.42505C6.68332 5.42505 6.91665 5.51672 7.09999 5.70005L12 10.6L16.9 5.70005C17.0833 5.51672 17.3167 5.42505 17.6 5.42505C17.8833 5.42505 18.1167 5.51672 18.3 5.70005C18.4833 5.88338 18.575 6.11672 18.575 6.40005C18.575 6.68338 18.4833 6.91672 18.3 7.10005L13.4 12L18.3 16.9C18.4833 17.0834 18.575 17.3167 18.575 17.6C18.575 17.8834 18.4833 18.1167 18.3 18.3C18.1167 18.4834 17.8833 18.575 17.6 18.575C17.3167 18.575 17.0833 18.4834 16.9 18.3L12 13.4Z"
                            fill="#2A3647" />
                    </g>
                </svg>
            </div>
        </div>
        <p class="boardOverlayTaskTitle">Kochwelt Page & Recipe Recommender</p>
        <p class="boardOverlayTaskDescription">Build start page with recipe recommendation.</p>
        <p class="boardOverlayTaskDate">
            Due Date: <span id="dueDate">29/01/2025</span>
        </p>
        <p class="boardOverlayTaskDate">
            Priority: <span </span>
        </p>
        <div class="boardOverlayAssignedTo">Assigned To:</div>
        <div class="boardOverlaySubtasks">Subtasks:</div>



          
        </p>
      </div>
  `
}