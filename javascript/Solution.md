# 1/ Array Manipulation

  function getEvenNumbers(numbers) {
      return numbers.filter(num => num % 2 === 0);
  }

=> const input = [15, 22, 33, 44, 55, 66, 77];
   const res = getEvenNumbers(input);
   console.log(res);
=> [22, 44, 66]





# 2/ Task 2: DOM Interaction

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Tasks</title>
</head>

<body>
    <p id="myText"> 1,2,3 Viva AYMEN </p>
    <button id="changeTextButton"> Change Text </button>

    // handle the button click
    <script>
        document.getElementById('changeTextButton').addEventListener('click', function() {
            document.getElementById('myText').textContent = 'Hello, Check!';
        });
    </script>

</body>
</html>



# 3/ Basic Fetch

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todos</title>
</head>

<body>

    <!-- Display the todo titles -->
    <ul id="todoList"></ul>

    <!-- Fetch data -->
    <script>
        
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {

                const todoList = document.getElementById('todoList');
                
                // First 5 todos
                for (let i = 0; i < 5; i++) {
                    const listItem = document.createElement('li');
                    listItem.textContent = data[i].title;
                    todoList.appendChild(listItem);
                }
            })

            .catch(error => console.error('Error fetching data:', error));

    </script>

</body>
</html>
