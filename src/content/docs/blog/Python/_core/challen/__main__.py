"""algo"""
from typing import List


def summaryRanges( nums: List[int]) -> List[str]:
    arr = []
    if len(nums) > 0:
        for key, value in enumerate(nums):
            # if(value >= 0):
            if key > 0:
                if not value == nums[key-1] +1:
                    if len(arr) == 0:
                        arr.append(str(nums[key-1]))
                    elif not str(arr[len(arr)-1]) == str(nums[key-1]):
                        arr[len(arr)-1] = arr[len(arr)-1] + f'->{nums[key-1]}'
                    arr.append(str(nums[key]))
            else:
                arr.append(str(nums[key])) 
            print(arr)


        if len(arr) > 1:
            arr.pop()
        return arr
    else:
        return []
            

# summaryRanges([0,1,2,4,5,7])
# summaryRanges([0,1,2,4,5,7]) # ["0->2","4->5","7"]
summaryRanges([]) # ["-1"]
