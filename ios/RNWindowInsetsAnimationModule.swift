//
//  RNWindowInsetsAnimationModule.swift
//  RNWindowInsetsAnimationModule
//
//  Copyright © 2021 Tolgahan Arikan. All rights reserved.
//

import Foundation

@objc(RNWindowInsetsAnimationModule)
class RNWindowInsetsAnimationModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
