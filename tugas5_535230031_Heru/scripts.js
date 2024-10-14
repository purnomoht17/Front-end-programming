$(document).ready(function() {
    // Menambahkan tugas baru
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        const taskText = $('#taskInput').val();
        if (taskText !== '') {
            $('#taskList').append(`
                <li>
                    <input type="checkbox" class="mark-completed">
                    <span>${taskText}</span>
                    <button class="delete">Delete</button>
                </li>
            `);
            $('#taskInput').val('');
        }
    });

    // Menandai tugas sebagai selesai saat checkbox dicentang
    $('#taskList').on('change', '.mark-completed', function() {
        $(this).parent().toggleClass('completed');
    });

    // Menghapus tugas
    $('#taskList').on('click', '.delete', function(event) {
        event.stopPropagation();
        $(this).parent().remove();
    });

    // Filter tugas
    $('#all').click(function() {
        $('li').show();
    });

    $('#completed').click(function() {
        $('li').hide();
        $('li.completed').show();
    });

    $('#pending').click(function() {
        $('li').hide();
        $('li:not(.completed)').show();
    });
});
