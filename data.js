var pythonData = {
    'data': {
      'end': {
        'name': 'append',
        'desc': 'Adds element to the end of a list. Does not return the new list, just modifies the original.',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.append(8) # [2, 3, 4, 5, 8]"
      },
      'insert': {
        'name': 'insert',
        'desc': 'Inserts the given element before the element with the given index. Does not return the new list, just modifies the original.',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>nums.insert(2, 9)  # [2, 3, 9, 4, 5]<br>nums.insert(3, 'one') # [2, 3, 9, \"one\", 4, 5]"
      },
      'extend': {
        'name': 'extend',
        'desc': 'Adds the elements in list2 to the end of the list. Using + or += on a list is similar to using extend(). Does not return anything.',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>more_nums = nums.extend([7, 8]) # [4, 5, 6, 7, 8]<br>" +
                "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>more_nums = nums.extend([7, 8]) # [4, 5, 6, 7, 8]<br>"
      },
      'concat': {
        'name': '+',
        'desc': 'Returns a new list built by adding (concatenating) two list together',
        'text': "nums = [2, 3, 4, 5] # [2, 3, 4, 5]<br>more_nums = nums + [1, 2] # [2, 3, 4, 5, 1, 2]<br>nums # [2, 3, 4, 5]<br><br>[7, 8, 9] + [2, 3, 4, 5] + [1, 2] # [7, 8, 9, 2, 3, 4, 5, 1, 2]"
      }
    }
};
