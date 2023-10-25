class Solution:
    def longestPalindrome(self, s: str) -> str:
        strLen = len(s)
        rev = s[::-1]
        sub = []
        maxLen = 0
        curLen = 0
        for i in range(strLen):
            for j in range(1, strLen):
                
        return rev
            
s= Solution()
print(s.longestPalindrome("babad"))


