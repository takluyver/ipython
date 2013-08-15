"""Simple script to show reference holding behavior.

This is used by a companion test case.
"""
from __future__ import print_function

import gc
from six.moves import map
from six.moves import zip

class C(object):
   def __del__(self):
      pass
      #print 'deleting object...'  # dbg

if __name__ == '__main__':
   c = C()

   c_refs = gc.get_referrers(c)
   ref_ids = map(id,c_refs)

   print('c referrers:',map(type,c_refs))
