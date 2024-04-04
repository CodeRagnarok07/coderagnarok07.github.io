from typing import List, Optional


class ListNode:
    """algo"""
    def __init__(self, val=0, next_iten=None):
        self.val = val
        self.next = next_iten


def two_sum(nums: List[int], target: int) -> List[int]:  # DONE
    """dado 1 array y un objetivo encontrar el index de 2 numero del ar"""
    max_index = len(nums)
    for i1 in range(0, max_index):
        for i2 in range(i1+1, max_index):
            if nums[i1] + nums[i2] == target:
                return [i1, i2]
    return []